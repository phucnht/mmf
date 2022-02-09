import { Box, GridBox } from '@whammytechvn/wt-components';
import { getLayoutMarketplaceInventory } from 'components/layouts/pages/getLayoutMarketplaceInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import InventoryLandCard from './components/InventoryLandCard';

const items = _times(10, i => ({
  id: '#257578245',
  name: `Kythira`,
  imgSrc: _sample([imgPants, imgHair, imgClothes, imgBoots]),
  priceBNB: 11356,
  priceUSD: 1127
}));

const MarketplaceInventoryLands: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Inventory - Lands | My Metafarm</title>
        <meta name="description" content="Inventory - Lands | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid gap-14">
        {items.map((item, index) => (
          <InventoryLandCard key={index} item={item} />
        ))}
      </GridBox>
    </>
  );
};

MarketplaceInventoryLands.getLayout = getLayoutMarketplaceInventory;

export default MarketplaceInventoryLands;
