import { Button, CircularProgress, Dialog, DialogContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { systemSelector } from 'reducers/systemSlice';

const isMobile = () => {
  const mobiles = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
  return mobiles.some((matches) => navigator.userAgent.match(matches));
};

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

const NetworkBar = () => {
  const dispatch = useDispatch();
  const { chainId: appChainId } = useSelector(systemSelector);

  const [chainId, setChainId] = useState(window.ethereum?.chainId);
  const network = appChainId === '137' ? MAINNET : TESTNET;

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
