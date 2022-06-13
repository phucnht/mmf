import { CardMedia, Grid, Paper } from '@mui/material';
import { SaleItemType } from 'models/Item';
import { shorten } from 'utils/common';
import { ChipItemRarity } from './CardItem';

const CardItem = ({ item }: { item: SaleItemType }) => {
  return (
    <Paper elevation={0} className='p-5 rounded-[8px] hover:shadow-card'>
      <div className='font-black text-2xl max-line-1'>{item.name}</div>
      <div className='font-semibold text-sm'>#{item.tokenId}</div>
      <CardMedia
        image={item.external.iconUrl}
        className='flex justify-center items-center h-[240px] relative rounded-[8px] p-8 my-3'
      >
        <div className='absolute top-3 left-3'>
          <ChipItemRarity rarity={item.external.rarity} />
        </div>
      </CardMedia>
      <Grid container spacing={1} className='flex-col'>
        <Grid item className='flex items-center justify-between'>
          <div className='font-semibold text-sm'>Price:</div>
          <div className='font-bold'>
            {item.price} {item.paymentToken.symbol}
          </div>
        </Grid>
        <Grid item className='flex items-center justify-between'>
          <div className='font-semibold text-sm'>Owner:</div>
          <div className='font-bold'>{shorten(item.ownerAddress)}</div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardItem;
