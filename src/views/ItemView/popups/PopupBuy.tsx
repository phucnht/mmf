import { LoadingButton } from '@mui/lab';
import { CardMedia, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material';
import { CloseButton } from 'components';
import { erc20Contract, marketContract, web3 } from 'contracts';
import { PopupController } from 'models/Common';
import { ItemType } from 'models/Item';
import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profileSlice';
import { systemSelector } from 'reducers/systemSlice';
import { queryClient } from 'services';
import { getPolygonFee } from 'utils/common';

type PopupProps = PopupController & {
  item: ItemType;
};

const PopupBuy = ({ item, onClose }: PopupProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const { address } = useSelector(profileSelector);
  const { chainId: appChainId, marketplaceAddress } = useSelector(systemSelector);

  const { mutate, isLoading } = useMutation(
    async () => {
      const maxFeeForFast = (await getPolygonFee(+appChainId)) as number;
      const priceInWei = web3.utils.toWei(item.sale?.price.toString()!, 'ether');

      const allowance = await erc20Contract(item.sale?.paymentToken.contractAddress!)
        .methods.allowance(address, marketplaceAddress)
        .call();
      if (Number(allowance) < Number(priceInWei)) {
        await erc20Contract(item.sale?.paymentToken.contractAddress!!)
          .methods.approve(marketplaceAddress, web3.utils.toTwosComplement(-1))
          .send({
            from: address,
            gasPrice: Math.ceil(maxFeeForFast),
          });
      }

      return marketContract(marketplaceAddress)
        .methods.matchTransaction(
          [item.ownerAddress, item.nftContract, item.sale?.paymentToken.contractAddress],
          [item.tokenId, priceInWei, item.sale?.saltNonce],
          item.sale?.signedSignature,
        )
        .send({
          from: address,
          gasPrice: Math.ceil(maxFeeForFast),
        });
    },
    {
      onSuccess: () => {
        enqueueSnackbar('Purchase item successfully');
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
      <DialogTitle>Purchase</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={5.5}>
            <CardMedia image={item.external.iconUrl} className='h-[240px]'>
              <div></div>
            </CardMedia>
          </Grid>
          <Grid item xs={6} className='flex flex-col gap-6'>
            <div>
              <div className='text-neutral-400'>You are about to buy this item</div>
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
                {isLoading ? 'Processing' : 'Buy now'}
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

export default PopupBuy;
