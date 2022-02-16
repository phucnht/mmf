import { web3, erc20Contract } from 'utils/contract';
import { clientAccount } from 'utils/api';
import { NonceDto, NonceRequest, TokenDto, TokenRequest } from './auth.i';
import { fetchBalance, login } from './auth.slice';
import { toast } from 'react-toastify';
import { store } from 'store/store';

export const getNonce = (params: NonceRequest): Promise<NonceDto> =>
  clientAccount.get(`/authentication/nonce`, { params });

export const getToken = (data: TokenRequest): Promise<TokenDto> => clientAccount.post(`/authentication/token`, data);

export const getBalance = async (address: string | null, tokenAddress?: string) => {
  const contract = erc20Contract(tokenAddress);
  const weiBalance = await contract.methods.balanceOf(address).call();
  const balance = +web3.utils.fromWei(weiBalance, 'ether');
  fetchBalance(balance);
  return balance;
};

export const connect = async (callback?: () => void) => {
  const { ethereum } = window;
  const { chainId: systemConfigChainId, chainName } = store.getState().systemConfig.data;

  try {
    // First request user to login to their wallet
    const [user] = await ethereum.request({ method: 'eth_requestAccounts' });
    // Check if user is connected to required Net
    const chainId = await web3.eth.getChainId();

    if (chainId !== +systemConfigChainId) {
      toast.info(`Please connect to ${chainName}`);
      return;
    }

    // Else get the user data
    else {
      try {
        const { address, nonce } = await getNonce({ address: user });
        const message = `${nonce}`;
        const signature = await web3.eth.personal.sign(message, address, '');
        const { accessToken } = await getToken({ address, signature });

        const balance = await getBalance(address, process.env.NEXT_PUBLIC_TOKEN_1);
        const balance2 = await getBalance(address, process.env.NEXT_PUBLIC_TOKEN_2);

        store.dispatch(login({ accessToken, address, balance, balance2 }));

        if (typeof callback === 'function') callback();
      } catch (err: any) {
        console.error(err);
      }
    }
  } catch (err: any) {
    if (err.code === 4001) {
      // EIP-1193 userRejectedRequest error
      // If this happens, the user rejected the connection request.
      toast.error('Cannot connect Metamask');
    } else {
      console.error(err);
    }
  }
};
