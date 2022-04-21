import useModalConfirmation from 'hooks/useModal';
import { useCallback, useEffect, useState } from 'react';
import { selectSystemConfigData } from 'store/market/system-config/systemConfig.slice';
import { useAppSelector } from 'store/store.hook';
import { networkConfigs } from 'utils/networks';

export const useNetworkValidate = () => {
  const { open, close, isOpened, type } = useModalConfirmation();
  const { chainId: systemConfigChainId } = useAppSelector(selectSystemConfigData);
  const [chainId, setChainId] = useState(window.ethereum?.chainId);

  const isWrongNetwork = useCallback(() => {
    const chainId = window.ethereum?.chainId;
    const network = networkConfigs[systemConfigChainId];
    const isWrongNetwork = chainId && network && chainId !== network.chainId;
    if (isWrongNetwork) {
      open({ type: 'network', data: network, isClosable: true });
    }
    return isWrongNetwork;
  }, [systemConfigChainId, open]);

  useEffect(() => {
    window.ethereum?.on('chainChanged', setChainId);
  }, []);

  useEffect(() => {
    const network = networkConfigs[systemConfigChainId];
    if (chainId === network?.chainId) {
      if (isOpened && type === 'network') {
        close();
      }
    }
  }, [chainId, systemConfigChainId, isOpened, type, close]);

  return [isWrongNetwork];
};
