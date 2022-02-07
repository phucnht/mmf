import { Box } from '@whammytechvn/wt-components';
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
      <Box className="text-white text-sm">In development...</Box>
    </>
  );
};

MarketplaceInventoryBox.Layout = LayoutPageMarketplaceInventory;

export default MarketplaceInventoryBox;
