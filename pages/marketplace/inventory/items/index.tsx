import { Box } from '@whammytechvn/wt-components';
import { getLayoutMarketplaceInventory } from 'components/layouts/pages/getLayoutMarketplaceInventory';
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

MarketplaceInventoryItems.getLayout = getLayoutMarketplaceInventory;

export default MarketplaceInventoryItems;
