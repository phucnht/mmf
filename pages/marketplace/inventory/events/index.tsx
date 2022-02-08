import { Box } from '@whammytechvn/wt-components';
import { getLayoutMarketplaceInventory } from 'components/layouts/pages/getLayoutMarketplaceInventory';
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

MarketplaceInventoryEvents.getLayout = getLayoutMarketplaceInventory;

export default MarketplaceInventoryEvents;
