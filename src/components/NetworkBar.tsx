import { Button, CircularProgress, Dialog, DialogContent, Typography } from '@mui/material';
import { useValidNetwork } from 'hooks';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { networkSelector } from 'reducers/networkSlice';

const isMobile = () => {
  const mobiles = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
  return mobiles.some((matches) => navigator.userAgent.match(matches));
};

const NetworkBar = () => {
  const { network } = useValidNetwork();
  const { onOpen } = useSelector(networkSelector);

  const [isOpenSwitch, setOpenSwitch] = useState(false);

  const handleSwitchNetwork = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: network.chainId }],
      });
    } catch (error: any) {
      if (error.code === 4902) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [network],
        });
      }
    }
  };

  const lastUpdate = useRef(onOpen);

  useEffect(() => {
    if (onOpen && lastUpdate.current !== onOpen) {
      lastUpdate.current = onOpen;
      setOpenSwitch(true);
    } else {
      setOpenSwitch(false);
    }
  }, [onOpen]);

  useEffect(() => {
    window.ethereum?.on('chainChanged', () => setOpenSwitch(false));
  }, []);

  return (
    <div hidden={isMobile()}>
      <Dialog open={isOpenSwitch} onClose={() => setOpenSwitch(false)}>
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
              onClick={handleSwitchNetwork}
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
