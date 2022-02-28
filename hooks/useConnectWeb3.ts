import { useState } from 'react';
import { toast } from 'react-toastify';
import { login } from 'store/account/auth/auth.slice';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';
import { selectSystemConfigData } from 'store/market/system-config/systemConfig.slice';
import { web3 } from 'utils/contract';
import { getBalance, getNonce, getToken } from 'store/account/auth/auth.api';

export default function useConnectWeb3(callback?: () => void) {
  const { ethereum } = window;
  const dispatch = useAppDispatch();
  const { chainId: systemConfigChainId, chainName } = useAppSelector(selectSystemConfigData);
  const { MMF, BUSD } = useAppSelector(selectPaymentTokenData);
  const [loading, setLoading] = useState(false);

  const connect = async () => {
    setLoading(true);
    try {
      // First request user to login to their wallet
      const [user] = await ethereum.request({ method: 'eth_requestAccounts' });
      // Check if user is connected to required Net
      const chainId = await web3.eth.getChainId();

      if (chainId !== +systemConfigChainId) {
        toast.info(`Please connect to ${chainName}`);
        setLoading(false);
        return;
      }

      // Else get the user data
      else {
        try {
          const { address, nonce } = await getNonce({ address: user });
          const message = `${nonce}`;
          const signature = await web3.eth.personal.sign(message, address, '');
          const { accessToken } = await getToken({ address, signature });

          const balance = await getBalance(address, MMF.contractAddress);
          const balance2 = await getBalance(address, BUSD.contractAddress);

          dispatch(login({ accessToken, address, balance, balance2 }));

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
    } finally {
      setLoading(false);
    }
  };

  return [loading, connect] as const;
}
