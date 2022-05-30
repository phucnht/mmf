import WalletConnectProvider from '@walletconnect/web3-provider';
import { web3 } from 'contracts';
import { store } from 'reducers/store';
import { closeSwitchNetwork } from 'reducers/networkSlice';
import { signIn, signOut } from 'reducers/profileSlice';
import { authService } from 'services';
import Web3 from 'web3';
import Web3Modal from 'web3modal';

const connectProvider = async () => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: [],
      },
    },
  };
  const web3Modal = new Web3Modal({
    providerOptions,
    theme: 'dark',
    cacheProvider: false,
  });

  const provider = Web3.givenProvider || (await web3Modal.connect());
  provider.on('accountsChanged', () => store.dispatch(signOut()));
  provider.on('disconnect', () => store.dispatch(signOut()));
  provider.on('chainChanged', () => store.dispatch(closeSwitchNetwork({})));

  web3.setProvider(provider);
};

const connectWallet = async () => {
  try {
    await connectProvider();
    let address;
    try {
      [address] = await web3.eth.requestAccounts();
    } catch {
      [address] = await web3.eth.getAccounts();
    }
    address = web3.utils.toChecksumAddress(address).toLowerCase();
    const { nonce } = await authService.getNonce({ address });

    const message = `${nonce}`;
    const signature = await web3.eth.personal.sign(message, address, '');
    const { accessToken } = await authService.getToken({ address, signature });
    store.dispatch(signIn({ address, accessToken }));
  } catch (error) {
    console.warn(error);
  }
};

export default {
  connectProvider,
  connectWallet,
};
