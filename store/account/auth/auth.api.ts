import _find from 'lodash/find';
import { web3, erc20Contract, whitelistContract } from 'utils/contract';
import { clientAccount } from 'utils/api';
import { NonceDto, NonceRequest, TokenDto, TokenRequest } from './auth.i';
import { fetchBalance, login, loginLoading } from './auth.slice';
import { toast } from 'react-toastify';
import { store } from 'store/store';

export const getNonce = (params: NonceRequest): Promise<NonceDto> =>
  clientAccount.get(`/authentication/nonce`, { params });

export const getToken = (data: TokenRequest): Promise<TokenDto> => clientAccount.post(`/authentication/token`, data);

export const checkIsInWhitelist = async (whitelistAddress: string, userAddress: string) => {
  const contract = whitelistContract(whitelistAddress);
  const result = await contract.methods.isInWhitelist(userAddress).call();
  return result;
};

export const getBalance = async (address: string | null, tokenAddress?: string) => {
  if (!tokenAddress) {
    return 0;
  }
  const contract = erc20Contract(tokenAddress);
  const weiBalance = await contract.methods.balanceOf(address).call();
  const balance = +web3.utils.fromWei(weiBalance, 'ether');
  fetchBalance(balance);
  return balance;
};

export const connect = async (callback?: () => void) => {
  store.dispatch(loginLoading(true));

  const { ethereum } = window;
  const { chainId: systemConfigChainId, chainName } = store.getState().systemConfig.data;
  const { MMF, BUSD } = store.getState().paymentToken.data;

  try {
    // First request user to login to their wallet
    const [user] = await ethereum.request({ method: 'eth_requestAccounts' });
    // Check if user is connected to required Net
    const chainId = await web3.eth.getChainId();

    if (chainId !== +systemConfigChainId) {
      toast.info(`Please connect to ${chainName}`);
      store.dispatch(loginLoading(false));
      return;
    }

    // Else get the user data
    else {
      try {
        const { address, nonce } = await getNonce({ address: user });
        const message = `${nonce}`;
        const signature = await web3.eth.personal.sign(message, address, '');
        const { accessToken } = await getToken({ address, signature });

        const balance = await getBalance(address, MMF?.contractAddress);
        const balance2 = await getBalance(address, BUSD?.contractAddress);

        store.dispatch(login({ accessToken, address, balance, balance2 }));

        if (typeof callback === 'function') callback();
      } catch (err: any) {
        console.error(err);
        store.dispatch(loginLoading(false));
      }
    }
  } catch (err: any) {
    store.dispatch(loginLoading(false));
    if (err.code === 4001) {
      // EIP-1193 userRejectedRequest error
      // If this happens, the user rejected the connection request.
      toast.error('Cannot connect Metamask');
    } else {
      console.error(err);
    }
  }
};
