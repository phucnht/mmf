import { currentNoBoxes } from '../season/seasonApi';
import { showModal } from 'store/modal/modalSlice';
import { MODAL_TYPE } from '../modal/modalSlice';
import { erc20Contract, web3 } from 'utils/contract';
import { client } from 'utils/api';
import { store } from '../store';
import { fetchBalance, login as loginDispatch } from 'store/auth/authSlice';
import { NonceData, TokenData, NonceDataRequest, LoginApiRequest } from './models/auth.model';
import appConfig from 'config';
import { isProdEnv } from 'utils/general';

const clientAccount = client(appConfig.server.accountApiUrl);
const { testNetId: TEST_NET_ID, tokenAddress: TOKEN_ADDRESS } = appConfig.web3;

export const getNonceData = (params: NonceDataRequest): Promise<NonceData> =>
  clientAccount.get(`/authentication/nonce`, { params });

export const login = (params: LoginApiRequest): Promise<TokenData> =>
  clientAccount.post(`/authentication/token`, params);

export const getBalance = async (address: string | null, tokenAddress = TOKEN_ADDRESS) => {
  const contract = erc20Contract(tokenAddress);
  const weiBalance = await contract.methods.balanceOf(address).call();
  const balance = +web3.utils.fromWei(weiBalance, 'ether');

  fetchBalance(balance);

  return balance;
};

export const connect = async (callback?: () => void) => {
  const { ethereum } = window;

  try {
    // First request user to login to their wallet
    const [user] = await ethereum.request({ method: 'eth_requestAccounts' });

    // Check if user is connected to required Net
    const chainId = await ethereum.request({ method: 'eth_chainId' });

    if (!isProdEnv && chainId !== TEST_NET_ID) {
      showModalConnectFailed('Please connect to BSC TestNet');
      return;
    }

    // Temporary test purpose
    if (isProdEnv && chainId !== TEST_NET_ID) {
      showModalConnectFailed('Please connect to BSC TestNet');
      return;
    }

    // if (isProdEnv && chainId !== MAIN_NET_ID) {
    //   showModalConnectFailed('Please connect to BSC MainNet');
    //   return;
    // }

    // If user already loggedIn, process the callback function
    const { loggedIn } = store.getState().auth;

    if (loggedIn) {
      if (typeof callback === 'function') callback();
    }
    // Else get the user data
    else {
      try {
        const { address, nonce } = await getNonceData({ address: user });
        const message = `${nonce}`;
        const signature = await web3.eth.personal.sign(message, address, '');
        const { accessToken } = await login({ address, signature });

        const balance = await getBalance(address);
        const noBoxes = await currentNoBoxes(address);

        store.dispatch(loginDispatch({ address, accessToken, balance, noBoxes }));

        if (typeof callback === 'function') callback();
      } catch (err: any) {
        console.error(err);
      }
    }
  } catch (err: any) {
    if (err.code === 4001) {
      // EIP-1193 userRejectedRequest error
      // If this happens, the user rejected the connection request.
      showModalConnectFailed();
    } else {
      console.error(err);
    }
  }
};

const showModalConnectFailed = (title = 'Cannot connect Metamask', subtitle = '') => {
  store.dispatch(showModal({ type: MODAL_TYPE.FAILED, data: { closable: false, title, subtitle } }));
};
