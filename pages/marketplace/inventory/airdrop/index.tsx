import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import _times from 'lodash/times';
import imgItem from '/public/assets/items/item-1.png';
import { GridBox } from '@whammytechvn/wt-components';
import Image from 'components/display/Image';
import { LayoutPageMarketplaceInventory } from 'components/layouts/marketplace/LayoutMarketplaceInventory';

const items = _times(10, i => ({
  id: i,
  name: `Item ${i}`,
  imgSrc: imgItem
}));

const MarketplaceInventoryAirdrop: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Inventory - Airdrop | My Metafarm</title>
        <meta name="description" content="Inventory - Airdrop | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid gap-4">
        {items.map(item => (
          <Image key={item.id} alt={item.name} src={item.imgSrc} />
        ))}
      </GridBox>
    </>
  );
};

MarketplaceInventoryAirdrop.Layout = LayoutPageMarketplaceInventory;

export default MarketplaceInventoryAirdrop;
