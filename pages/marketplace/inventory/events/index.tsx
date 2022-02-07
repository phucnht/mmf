import { LayoutPageMarketplaceInventory } from 'components/layouts/marketplace/LayoutMarketplaceInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const MarketplaceInventoryEvents: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Inventory - Events | My Metafarm</title>
        <meta name="description" content="Inventory - Events | My Metafarm" />
      </Head>
    </>
  );
};

MarketplaceInventoryEvents.Layout = LayoutPageMarketplaceInventory;

export default MarketplaceInventoryEvents;
