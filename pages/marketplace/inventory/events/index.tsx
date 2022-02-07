import { Box } from '@whammytechvn/wt-components';
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
      <Box className="text-white text-sm">In development...</Box>
    </>
  );
};

MarketplaceInventoryEvents.Layout = LayoutPageMarketplaceInventory;

export default MarketplaceInventoryEvents;
