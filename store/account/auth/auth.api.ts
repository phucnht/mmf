import WalletConnectProvider from '@walletconnect/web3-provider';
import { toast } from 'react-toastify';
import { store } from 'store/store';
import { clientAccount, clientMarket } from 'utils/api';
import { erc20Contract, plgWhitelistContract, web3 } from 'utils/contract';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import { NonceDto, NonceRequest, TokenDto, TokenRequest, WhitelistDto } from './auth.i';
import { fetchBalance, login, loginLoading, logout } from './auth.slice';

export const getNonce = (params: NonceRequest): Promise<NonceDto> =>
  clientAccount.get(`/authentication/nonce`, { params });

export const getToken = (data: TokenRequest): Promise<TokenDto> => clientAccount.post(`/authentication/token`, data);

export const checkIsInWhitelist = async (whitelistAddress: string, userAddress: string) => {
  const contract = plgWhitelistContract(whitelistAddress);
  const result = await contract.methods.isInWhitelist(userAddress).call();
  return result;
};

export const checkIsTester = async (address: string) => {
  const { name, addresses } = (await clientMarket.get(`/whitelists`)) as WhitelistDto;
  if (!name) return true;
  if (!address) return false;
  return addresses.toLowerCase().includes(address.toLowerCase());
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

export const connectProvider = async () => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: [].reduce((sum, item: any) => ({ ...sum, [item.chainId]: item.rpcUrl }), {})
      }
    }
  };
  const web3Modal = new Web3Modal({ providerOptions, cacheProvider: false });

  const provider = Web3.givenProvider || (await web3Modal.connect());
  provider.on('accountsChanged', () => store.dispatch(logout()));
  provider.on('disconnect', () => store.dispatch(logout()));

  web3.setProvider(provider);
};

export const connect = async (callback?: () => void) => {
  store.dispatch(loginLoading(true));

  const { chainId: systemConfigChainId, chainName } = store.getState().systemConfig.data;
  const { MMF, BUSD } = store.getState().paymentToken.data;

  try {
    await connectProvider();

    const chainId = await web3.eth.getChainId();
    if (chainId !== +systemConfigChainId) {
      toast.info(`Please connect to ${chainName}`);
      store.dispatch(loginLoading(false));
      return;
    }

    let user;
    try {
      [user] = await web3.eth.requestAccounts();
    } catch {
      [user] = await web3.eth.getAccounts();
    }
    user = user.toLowerCase();

    const { address, nonce } = await getNonce({ address: user });
    const message = `${nonce}`;
    const signature = await web3.eth.personal.sign(message, address, '');
    const { accessToken } = await getToken({ address, signature });

    const balance = await getBalance(address, MMF?.contractAddress);
    const balance2 = await getBalance(address, BUSD?.contractAddress);

    store.dispatch(login({ accessToken, address, balance, balance2 }));

    if (typeof callback === 'function') callback();
  } catch (error) {
    store.dispatch(loginLoading(false));
  }
};
