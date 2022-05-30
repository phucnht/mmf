import { Button, CircularProgress, Dialog, DialogContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { systemSelector } from 'reducers/systemSlice';

const isMobile = () => {
  const mobiles = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
  return mobiles.some((matches) => navigator.userAgent.match(matches));
};

const TESTNET = {
  chainName: 'Klaytn Testnet Baobab',
  chainId: '0x3e9',
  nativeCurrency: { name: 'KLAY', symbol: 'KLAY', decimals: 18 },
  rpcUrls: ['https://api.baobab.klaytn.net:8651'],
  blockExplorerUrls: ['https://baobab.scope.klaytn.com'],
};

const MAINNET = {
  chainName: 'Klaytn Mainnet Cypress',
  chainId: '0x2019',
  nativeCurrency: { name: 'KLAY', symbol: 'KLAY', decimals: 18 },
  rpcUrls: ['https://public-node-api.klaytnapi.com/v1/cypress'],
  blockExplorerUrls: ['https://scope.klaytn.com'],
};

const NetworkBar = () => {
  const dispatch = useDispatch();
  const { chainId: appChainId } = useSelector(systemSelector);

  const [chainId, setChainId] = useState(window.ethereum?.chainId);
  const network = appChainId === '8217' ? MAINNET : TESTNET;

  const handleConnectWallet = async () => {
    try {
      if (network.chainId !== window.ethereum.chainId)
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: network.chainId }],
        });
      else {
        setChainId(network.chainId);
      }
    } catch (error: any) {
      if (error.code === 4902) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [network],
        });
      }
    }
  };

  useEffect(() => {
    window.ethereum?.on('chainChanged', setChainId);
  }, [dispatch]);

  return (
    <div hidden={isMobile()}>
      <Dialog open={chainId && chainId !== network.chainId && !!appChainId}>
        <DialogContent className='px-16 py-8'>
          <div className='flex flex-col items-center'>
            <CircularProgress color='secondary' />
            <div className='text-center my-6'>
              <Typography variant='h5'>Wrong Network</Typography>
              <Typography>Please switch network to continue</Typography>
            </div>
            <Button
              color='primary'
              startIcon={<img src={require('assets/icons/MetaMask.png').default.src} />}
              onClick={handleConnectWallet}
            >
              {network.chainName}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NetworkBar;
