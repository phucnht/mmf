import { LayoutPageMarketplaceInventory } from 'components/layouts/marketplace/LayoutMarketplaceInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const MarketplaceInventoryItems: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Inventory - Items | My Metafarm</title>
        <meta name="description" content="Inventory - Items | My Metafarm" />
      </Head>
    </>
  );
};

MarketplaceInventoryItems.Layout = LayoutPageMarketplaceInventory;

export default MarketplaceInventoryItems;
