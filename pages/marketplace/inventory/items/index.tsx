import { GridBox } from '@whammytechvn/wt-components';
import Image from 'components/display/image/Image';
import { getLayoutMarketplaceInventory } from 'components/layouts/pages/getLayoutMarketplaceInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import imgItem from '/public/assets/inventory/airdrop/t-shirt.png';
import _times from 'lodash/times';

const items = _times(10, i => ({
  id: i,
  name: `Item ${i}`,
  imgSrc: imgItem
}));

const MarketplaceInventoryItems: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Inventory - Items | My Metafarm</title>
        <meta name="description" content="Inventory - Items | My Metafarm" />
      </Head>
      <GridBox className="grid-cols-fluid-3 gap-4">
        {items.map(item => (
          <Image key={item.id} alt={item.name} src={item.imgSrc} />
        ))}
      </GridBox>
    </>
  );
};

MarketplaceInventoryItems.getLayout = getLayoutMarketplaceInventory;

export default MarketplaceInventoryItems;
