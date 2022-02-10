import { GridBox } from '@whammytechvn/wt-components';
import { getLayoutMarketplaceInventory } from 'components/layouts/pages/getLayoutMarketplaceInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import InventoryLandCard from './components/InventoryLandCard';

import _times from 'lodash/times';
import imgLand1 from '/public/assets/inventory/lands/land-1.png';

const items = _times(4, i => ({
  id: '#257578245',
  name: `Kythira`,
  breedCount: 3,
  imgSrc: imgLand1,
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
      <GridBox className="grid-cols-fluid-2 gap-[2.4rem]">
        {items.map((item, index: number) => (
          <InventoryLandCard key={index} item={item} />
        ))}
      </GridBox>
    </>
  );
};

MarketplaceInventoryLands.getLayout = getLayoutMarketplaceInventory;

export default MarketplaceInventoryLands;
