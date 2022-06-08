import { Button, CardMedia, DialogActions, DialogContent, DialogTitle, Grid, MenuItem, TextField } from '@mui/material';
import { CloseButton, InputNumber } from 'components';
import { erc20Contract, erc721Contract, marketContract, web3 } from 'contracts';
import { Controller, useForm } from 'react-hook-form';
import { PopupController } from 'models/Common';
import { ItemType } from 'models/Item';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profileSlice';
import { systemSelector } from 'reducers/systemSlice';
import { marketService, queryClient, systemService } from 'services';
import { useMutation, useQuery } from 'react-query';
import { LoadingButton } from '@mui/lab';
import { getPolygonFee } from 'utils/common';
import { CreateSaleBody, GetHashMessageParams } from 'models/Sale';
import { useSnackbar } from 'notistack';

type PopupProps = PopupController & {
  item: ItemType;
};

const PopupBuy = ({ item, onClose }: PopupProps) => {
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
      <DialogTitle>Purchase</DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={5.5}>
            <CardMedia image={item.external.backgroundUrl} className='flex justify-center items-center h-[240px] p-6'>
              <img src={item.external.iconUrl} className='max-h-full' />
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
              <LoadingButton variant='contained' color='secondary' loading={isLoading} onClick={handleClickSubmit}>
                Buy now
              </LoadingButton>
            </div>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions></DialogActions>
      <CloseButton onClick={onClose} />
    </>
  );
};

export default PopupBuy;
