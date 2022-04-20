import { useEffect, useState } from 'react';
import useModalConfirmation from 'hooks/useModal';
import { selectSystemConfigData } from 'store/market/system-config/systemConfig.slice';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import { networkConfigs } from 'utils/networks';

export default function useNetworkValidate() {
  const dispatch = useAppDispatch();
  const { open, close } = useModalConfirmation();
  const { chainId: systemConfigChainId } = useAppSelector(selectSystemConfigData);
  const [chainId, setChainId] = useState(window.ethereum?.chainId);

  useEffect(() => {
    window.ethereum?.on('chainChanged', setChainId);
  }, [dispatch]);

  useEffect(() => {
    const network = networkConfigs[systemConfigChainId];
    if (chainId && network && chainId !== network.chainId) {
      open({ type: 'network', data: network, isClosable: false });
    } else {
      close();
    }
  }, [chainId, systemConfigChainId, open, close]);
}
