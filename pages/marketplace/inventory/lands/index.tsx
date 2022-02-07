import { Box } from '@whammytechvn/wt-components';
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
      <Box className="text-white text-sm">In development...</Box>
    </>
  );
};

MarketplaceInventoryLands.Layout = LayoutPageMarketplaceInventory;

export default MarketplaceInventoryLands;
