import { LoadingButton } from '@mui/lab';
import { Button, Dialog, Grid, Paper } from '@mui/material';
import { NextImage } from 'components';
import { metaverseContract, whitelistContract } from 'contracts';
import { useValidNetwork } from 'hooks';
import { AirdropEvent, AirdropItem } from 'models/Airdrop';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profileSlice';
import { systemSelector } from 'reducers/systemSlice';
import { walletService } from 'services';
import { PopupAirdrop } from '.';

const CardAirdropItem = ({ item, event }: { item: AirdropItem; event: AirdropEvent }) => {
  const { isLoggedIn, address } = useSelector(profileSelector);
  const { metaverseContractAddress } = useSelector(systemSelector);
  const { validNetwork } = useValidNetwork();

  const [isOpenClaim, setOpenClaim] = useState(false);

  const { data: isInWhitelist } = useQuery(
    ['whitelistContract.isInWhitelist', { contract: item.whitelistContract, address }],
    () => whitelistContract(item.whitelistContract).methods.isInWhitelist(address).call(),
    { enabled: isLoggedIn },
  );

  const { data: alreadyClaimed } = useQuery(
    ['metaverseContract.metaverseEventClaims', { onchainId: item.onchainId, address }],
    () => metaverseContract(metaverseContractAddress).methods.metaverseEventClaims(item.onchainId, address).call(),
    { enabled: isLoggedIn },
  );

  return (
    <Paper className='md:p-10 p-4 rounded-[24px] shadow-md'>
      <Grid container spacing={5}>
        <Grid item md={5.5} xs={12}>
          <div className='relative h-full min-h-[240px]'>
            <NextImage src={item.itemImage} layout='fill' objectFit='contain' />
          </div>
        </Grid>
        <Grid item md={6.5} xs={12} className='flex flex-col items-start gap-3'>
          <div className='bg-info-light text-white font-black rounded-[8px] px-3 py-1'>{event.name}</div>
          <div className='font-black text-2xl text-info-dark'>{item.name}</div>

          <div className='font-semibold text-sm whitespace-pre-line'>{item.description}</div>
          <div className='font-bold text-orange-700'>{item.condition}</div>
          <div className='flex md:flex-row flex-col md:gap-6 gap-3'>
            {isLoggedIn ? (
              <LoadingButton
                className='w-40'
                variant='contained'
                disabled={!isInWhitelist || alreadyClaimed}
                onClick={() => validNetwork(() => setOpenClaim(true))}
              >
                CLAIM
              </LoadingButton>
            ) : (
              <Button className='w-40' onClick={() => validNetwork(walletService.connectWallet)}>
                Connect Wallet
              </Button>
            )}
          </div>
          <Dialog open={isOpenClaim} fullWidth maxWidth='sm'>
            <PopupAirdrop item={item} onClose={() => setOpenClaim(false)} />
          </Dialog>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardAirdropItem;
