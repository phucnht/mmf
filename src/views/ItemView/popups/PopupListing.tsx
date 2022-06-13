import { LoadingButton } from '@mui/lab';
import { CardMedia, DialogActions, DialogContent, DialogTitle, Grid, MenuItem, TextField } from '@mui/material';
import { CloseButton, InputNumber } from 'components';
import { erc721Contract, web3 } from 'contracts';
import { PopupController } from 'models/Common';
import { ItemType } from 'models/Item';
import { GetHashMessageParams } from 'models/Sale';
import { useSnackbar } from 'notistack';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profileSlice';
import { systemSelector } from 'reducers/systemSlice';
import { marketService, queryClient, systemService } from 'services';
import { getPolygonFee } from 'utils/common';

type PopupProps = PopupController & {
  item: ItemType;
};

const PopupListing = ({ item, onClose }: PopupProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const { address } = useSelector(profileSelector);
  const { chainId: appChainId, marketplaceAddress } = useSelector(systemSelector);

  const { data: payments } = useQuery(['fetchPayments'], () => systemService.fetchPayments());

  const { control, handleSubmit, getValues } = useForm();

  const { mutate, isLoading } = useMutation(
    async () => {
      const maxFeeForFast = (await getPolygonFee(+appChainId)) as number;

      const isApprovedForAll = await erc721Contract(item.nftContract)
        .methods.isApprovedForAll(address, marketplaceAddress)
        .call();
      if (!isApprovedForAll) {
        await erc721Contract(item.nftContract)
          .methods.setApprovalForAll(marketplaceAddress, true)
          .send({
            from: address,
            gasPrice: Math.ceil(maxFeeForFast),
          });
      }

      const payload = {
        nftItemId: item.id,
        saltNonce: new Date().getTime(),
        ownerAccept: true,
        ...getValues(),
      } as GetHashMessageParams;

      const { hashMessage: message } = await marketService.getHashMessage(payload);

      const signedSignature = await web3.eth.personal.sign(message, address!, '');
      return marketService.createSale({ ...payload, signedSignature });
    },
    {
      onSuccess: () => {
        enqueueSnackbar('Put on market successfully');
        queryClient.invalidateQueries('marketService.getItemById');
        onClose();
      },
    },
  );

  const handleClickSubmit = () => {
    handleSubmit(() => {
      mutate();
    })();
  };

  return (
    <>
      <DialogTitle>Listing on marketplace</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={5.5}>
            <CardMedia image={item.external.iconUrl} className='h-[240px]'>
              <div></div>
            </CardMedia>
          </Grid>
          <Grid item xs={6} className='flex flex-col gap-6'>
            <div>
              <div className='text-neutral-400'>You are about to sell your item</div>
              <div className='font-bold'>#{item.tokenId}</div>
            </div>

            <div>
              <div className='text-neutral-400'>Price</div>
              <div className='flex'>
                <Controller
                  name='price'
                  defaultValue=''
                  control={control}
                  rules={{ required: 'Price is required' }}
                  render={({ field, fieldState: { invalid, error } }) => (
                    <TextField
                      {...field}
                      InputProps={{
                        inputComponent: InputNumber,
                        style: { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
                      }}
                      disabled={isLoading}
                      error={invalid}
                      helperText={error?.message}
                    />
                  )}
                />
                <Controller
                  name='paymentTokenId'
                  defaultValue={payments?.[0].id}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      select
                      {...field}
                      InputProps={{ style: { borderTopLeftRadius: 0, borderBottomLeftRadius: 0, width: 100 } }}
                      disabled={isLoading}
                    >
                      {payments?.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.symbol}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
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
                {isLoading ? 'Processing' : 'Put on market'}
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

export default PopupListing;
