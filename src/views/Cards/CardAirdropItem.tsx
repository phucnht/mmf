import { LoadingButton } from '@mui/lab';
import { Button, Grid, Paper } from '@mui/material';
import { NextImage } from 'components';
import { metaverseContract, whitelistContract } from 'contracts';
import { AirdropEvent, AirdropItem } from 'models/Airdrop';
import { useMutation, useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profileSlice';
import { systemSelector } from 'reducers/systemSlice';
import { queryClient, walletService } from 'services';
import { getPolygonFee, randomTokenID } from 'utils/common';

const CardAirdropItem = ({ item, event }: { item: AirdropItem; event: AirdropEvent }) => {
  const { isLoggedIn, address } = useSelector(profileSelector);
  const { chainId: appChainId, metaverseContractAddress } = useSelector(systemSelector);

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

  const { mutate: claim, isLoading } = useMutation(
    async () => {
      const maxFeeForFast = (await getPolygonFee(+appChainId)) as number;
      return metaverseContract(metaverseContractAddress)
        .methods.claim721Event(item.onchainId, randomTokenID())
        .send({
          from: address,
          gasPrice: Math.ceil(maxFeeForFast),
        });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('fetchItems');
        queryClient.invalidateQueries('metaverseContract.metaverseEventClaims');
      },
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
              <LoadingButton
                className='w-40'
                variant='contained'
                disabled={!isInWhitelist || alreadyClaimed}
                loading={isLoading}
                onClick={() => claim()}
              >
                CLAIM
              </LoadingButton>
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
