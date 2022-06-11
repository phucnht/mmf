import { Container, Grid } from '@mui/material';
import { ItemType } from 'models/Item';
import { CardItem } from 'views/Cards';

const items = [
  {
    id: 1,
    name: 'Grandslam Cap',
    tokenId: 18712375,
    external: { rarity: 'Rare', iconUrl: require('../assets/images/market-Cap.webp').default.src },
  },
  {
    id: 2,
    name: 'Grandslam Glasses',
    tokenId: 18712376,
    external: { rarity: 'Rare', iconUrl: require('../assets/images/market-Glasses.webp').default.src },
  },
  {
    id: 3,
    name: 'Grandslam Shirt',
    tokenId: 18712377,
    external: { rarity: 'Rare', iconUrl: require('../assets/images/market-Shirt.webp').default.src },
  },
  {
    id: 4,
    name: 'Grandslam Shoes',
    tokenId: 18712378,
    external: { rarity: 'Rare', iconUrl: require('../assets/images/market-Shoes.webp').default.src },
  },
  {
    id: 5,
    name: 'Grandslam Bag',
    tokenId: 18712379,
    external: { rarity: 'Rare', iconUrl: require('../assets/images/market-Bag.webp').default.src },
  },
];

const Marketplace = () => {
  return (
    <div
      className='relative'
      style={{ background: `linear-gradient(#0071bc 0%, rgba(93, 168, 236, 0) 47.4%, #0000 100%)` }}
    >
      <Container className='py-20 z-10 relative'>
        <div className='home-title text-center'>MARKETPLACE</div>
        <div className='font-bold text-2xl max-w-[640px] text-center mx-auto'>
          Where players exchange various digital assets generated in the Metaverse and experience the trading platform
          on the website or even in the game.
        </div>

        <Grid container spacing={3} className='mt-6'>
          {items.map((item: any) => (
            <Grid item xl={12 / 5} lg={3} md={4} sm={6} xs={12} key={item.id}>
              <CardItem item={item as ItemType} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Marketplace;
