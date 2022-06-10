import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openSwitchNetwork } from 'reducers/networkSlice';
import { systemSelector } from 'reducers/systemSlice';

const TESTNET = {
  chainName: 'Polygon Mumbai Testnet',
  chainId: '0x13881',
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
  rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
  blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
};

const MAINNET = {
  chainName: 'Polygon Mainnet',
  chainId: '0x89',
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
  rpcUrls: ['https://polygon-rpc.com'],
  blockExplorerUrls: ['https://polygonscan.com'],
};

const useValidNetwork = () => {
  const dispatch = useDispatch();
  const { chainId: appChainId } = useSelector(systemSelector);

  const network = useMemo(() => (appChainId === '137' ? MAINNET : TESTNET), [appChainId]);

  const validNetwork = useCallback(
    (callback?: any) => {
      const chainId = window.ethereum?.chainId;
      const isWrongNetwork = chainId && network && chainId !== network.chainId;
      if (isWrongNetwork) {
        dispatch(openSwitchNetwork(network));
      } else {
        callback?.();
      }
    },
    [dispatch, network],
  );

  return { network, validNetwork };
};

export default useValidNetwork;
