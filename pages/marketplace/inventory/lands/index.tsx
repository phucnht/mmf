import { LayoutPageMarketplaceInventory } from 'components/layouts/marketplace/LayoutMarketplaceInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const MarketplaceInventoryLands: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Inventory - Lands | My Metafarm</title>
        <meta name="description" content="Inventory - Lands | My Metafarm" />
      </Head>
    </>
  );
};

MarketplaceInventoryLands.Layout = LayoutPageMarketplaceInventory;

export default MarketplaceInventoryLands;
