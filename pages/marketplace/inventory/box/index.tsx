import { GridBox } from '@whammytechvn/wt-components';
import { getLayoutMarketplaceInventory } from 'components/layouts/pages/getLayoutMarketplaceInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import InventoryBoxCard from './components/InventoryBoxCard';

import _times from 'lodash/times';
import imgBox1 from '/public/assets/inventory/box/box-1.png';

const items = _times(4, i => ({
  id: '#257578245',
  name: `Meta Box`,
  breedCount: 3,
  imgSrc: imgBox1,
  priceBNB: 11356,
  priceUSD: 1127
}));

const MarketplaceInventoryBox: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Inventory - Box | My Metafarm</title>
        <meta name="description" content="Inventory - Box | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid-2 gap-[2.4rem]">
        {items.map((item, index: number) => (
          <InventoryBoxCard key={index} item={item} />
        ))}
      </GridBox>
    </>
  );
};

MarketplaceInventoryBox.getLayout = getLayoutMarketplaceInventory;

export default MarketplaceInventoryBox;
