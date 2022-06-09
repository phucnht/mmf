import { LoadingButton } from '@mui/lab';
import { CardMedia, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material';
import { CloseButton } from 'components';
import { marketContract, web3 } from 'contracts';
import { PopupController } from 'models/Common';
import { ItemType } from 'models/Item';
import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profileSlice';
import { systemSelector } from 'reducers/systemSlice';
import { marketService, queryClient } from 'services';
import { getPolygonFee } from 'utils/common';

type PopupProps = PopupController & {
  item: ItemType;
};

const PopupCancel = ({ item, onClose }: PopupProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const { address } = useSelector(profileSelector);
  const { chainId: appChainId, marketplaceAddress } = useSelector(systemSelector);

  const { mutate, isLoading } = useMutation(
    async () => {
      const maxFeeForFast = (await getPolygonFee(+appChainId)) as number;
      const priceInWei = web3.utils.toWei(item.sale?.price.toString()!, 'ether');

      await marketContract(marketplaceAddress)
        .methods.cancelSale(
          item.type,
          [address, item.nftContract, item.sale?.paymentToken.contractAddress],
          [item.tokenId, priceInWei, item.sale?.saltNonce, item.amount],
          item.sale?.signedSignature,
        )
        .send({
          from: address,
          gasPrice: Math.ceil(maxFeeForFast),
        });

      return marketService.deleteSale({ id: item.sale?.id! });
    },
    {
      onSuccess: () => {
        enqueueSnackbar('Cancel listing successfully');
        queryClient.invalidateQueries('marketService.getItemById');
        onClose();
      },
    },
  );

  const handleClickSubmit = () => {
    mutate();
  };

  return (
    <>
      <DialogTitle>Cancel listing</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={5.5}>
            <CardMedia image={item.external.backgroundUrl} className='flex justify-center items-center h-[240px] p-6'>
              <img src={item.external.iconUrl} className='max-h-full' />
            </CardMedia>
          </Grid>
          <Grid item xs={6} className='flex flex-col gap-6'>
            <div>
              <div className='text-neutral-400'>You are about to unlist your item</div>
              <div className='font-bold'>#{item.tokenId}</div>
            </div>

            <div>
              <div className='text-neutral-400'>Price</div>
              <div className='font-bold'>
                {item.sale?.price} {item.sale?.paymentToken.symbol}
              </div>
            </div>

            <div className='flex-1 flex items-end'>
              <LoadingButton
                variant='contained'
                color='secondary'
                className='w-40'
                loading={isLoading}
                onClick={handleClickSubmit}
              >
                {isLoading ? 'Processing' : 'Cancel listing'}
              </LoadingButton>
            </div>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions></DialogActions>
      <CloseButton onClick={onClose} disabled={isLoading} />
    </>
  );
};

export default PopupCancel;
