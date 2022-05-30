import { Button, Grid, Paper } from '@mui/material';
import { NextImage } from 'components';
import { metaverseContract } from 'contracts';
import { AirdropEvent, AirdropItem } from 'models/Airdrop';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profileSlice';
import { systemSelector } from 'reducers/systemSlice';
import { walletService } from 'services';
import { randomTokenID } from 'utils/common';

const CardAirdropItem = ({ item, event }: { item: AirdropItem; event: AirdropEvent }) => {
  const { isLoggedIn, address } = useSelector(profileSelector);
  const { metaverseContractAddress } = useSelector(systemSelector);

  const { mutate: claim, isLoading } = useMutation(
    async () => {
      return metaverseContract(metaverseContractAddress)
        .methods.claim721Event(item.onchainId, randomTokenID())
        .send({ from: address })
        .catch(console.log);
    },
    {
      onSuccess: () => {},
    },
  );

  return (
    <Paper className='p-10 rounded-[24px] shadow-md'>
      <Grid container spacing={5}>
        <Grid item md={5.5}>
          <div className='relative h-full'>
            <NextImage src={item.itemImage} layout='fill' objectFit='contain' />
          </div>
        </Grid>
        <Grid item md={6.5} className='flex flex-col items-start gap-3'>
          <div className='bg-info-light text-white font-black rounded-[8px] px-3 py-1'>{event.name}</div>
          <div className='font-black text-2xl text-info-dark'>{item.name}</div>

          <div className='font-semibold text-sm whitespace-pre-line'>{item.description}</div>
          <div className='font-bold text-orange-700'>{item.condition}</div>
          <div className='flex gap-6'>
            {isLoggedIn ? (
              <Button className='w-40' onClick={() => claim()}>
                CLAIM
              </Button>
            ) : (
              <Button className='w-40' onClick={() => walletService.connectWallet()}>
                Connect Wallet
              </Button>
            )}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardAirdropItem;
