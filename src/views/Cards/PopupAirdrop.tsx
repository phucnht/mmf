import { LoadingButton } from '@mui/lab';
import { Button, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material';
import { CloseButton, NextLink } from 'components';
import { metaverseContract } from 'contracts';
import { AirdropItem } from 'models/Airdrop';
import { PopupController } from 'models/Common';
import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profileSlice';
import { systemSelector } from 'reducers/systemSlice';
import { publicRoute } from 'routes';
import { queryClient } from 'services';
import { getPolygonFee, randomTokenID } from 'utils/common';

type PopupProps = PopupController & {
  item: AirdropItem;
};

const PopupAirdrop = ({ item, onClose }: PopupProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const { address } = useSelector(profileSelector);
  const { chainId: appChainId, metaverseContractAddress } = useSelector(systemSelector);

  const {
    mutate: claim,
    isLoading,
    isSuccess,
  } = useMutation(
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
        enqueueSnackbar('Claim airdrop successfully');
        queryClient.invalidateQueries('metaverseContract.metaverseEventClaims');
        queryClient.invalidateQueries('marketService.fetchInventory');
      },
    },
  );

  return (
    <>
      <DialogTitle>Airdrop</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={5.5}>
            <div className='flex justify-center items-center h-[180px]'>
              <img src={item.itemImage} className='max-h-full' />
            </div>
          </Grid>
          <Grid item xs={6} className='flex flex-col gap-6'>
            <div>
              <div className='text-neutral-400'>You are about to claim airdrop</div>
              <div className='font-bold'>{item.name}</div>
            </div>

            <div className='flex-1 flex items-end'>
              {isSuccess ? (
                <NextLink href={publicRoute.profile.path + '?tab=owned'}>
                  <a>
                    <Button color='success' className='w-40'>
                      To Inventory
                    </Button>
                  </a>
                </NextLink>
              ) : (
                <LoadingButton
                  variant='contained'
                  color='primary'
                  className='w-40'
                  loading={isLoading}
                  onClick={() => claim()}
                >
                  {isLoading ? 'Processing' : 'CLAIM'}
                </LoadingButton>
              )}
            </div>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions></DialogActions>
      <CloseButton onClick={onClose} disabled={isLoading} />
    </>
  );
};

export default PopupAirdrop;
