import { CardMedia, Container, Grid } from '@mui/material';
import { ItemType } from 'models/Item';
import { useQuery } from 'react-query';
import { marketService } from 'services';
import { shorten } from 'utils/common';
import { CardItem } from 'views/Cards';
import { Model3d, BoxPrice } from './components';

const ItemView = ({ item: apiItem }: { item: ItemType }) => {
  const { data: item } = useQuery(
    ['marketService.getItemById', { id: apiItem.id }],
    () => marketService.getItemById({ id: apiItem.id }),
    { placeholderData: apiItem },
  ) as { data: ItemType };

  return (
    <Container className='py-20'>
      <Grid container spacing={5}>
        <Grid item md={6} xs={12}>
          <CardMedia image={item.external.backgroundUrl} className='md:h-[600px] h-[360px] relative p-8 border'>
            <Model3d urlModel={item.external.modelUrl} urlTexture={item.external.uvUrl} />
          </CardMedia>
        </Grid>
        <Grid item md={6} xs={12} className='flex flex-col items-start'>
          <div className='font-black text-2xl max-line-1'>{item.name}</div>
          <div className='font-bold text-base text-neutral-400'>#{item.tokenId}</div>
          <div className='my-6'>
            <CardItem.Rarity rarity={item.external.rarity} />
          </div>

          <Grid container>
            <Grid item>
              <div className='font-semibold text-sm'>Owner:</div>
              <div className='font-bold'>{shorten(item.ownerAddress)}</div>
            </Grid>
          </Grid>

          <div className='flex-1 flex items-end'>
            <BoxPrice item={item} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ItemView;
