import { Box } from '@whammytechvn/wt-components';
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
      <Box className="text-white text-sm">In development...</Box>
    </>
  );
};

MarketplaceInventoryItems.Layout = LayoutPageMarketplaceInventory;

export default MarketplaceInventoryItems;
