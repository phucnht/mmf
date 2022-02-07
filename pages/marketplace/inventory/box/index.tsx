import { LayoutPageMarketplaceInventory } from 'components/layouts/marketplace/LayoutMarketplaceInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const MarketplaceInventoryBox: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Inventory - Box | My Metafarm</title>
        <meta name="description" content="Inventory - Box | My Metafarm" />
      </Head>
    </>
  );
};

MarketplaceInventoryBox.Layout = LayoutPageMarketplaceInventory;

export default MarketplaceInventoryBox;
