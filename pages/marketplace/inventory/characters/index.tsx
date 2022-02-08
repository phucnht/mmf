import { Box } from '@whammytechvn/wt-components';
import { getLayoutMarketplaceInventory } from 'components/layouts/pages/getLayoutMarketplaceInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const MarketplaceInventoryCharacters: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Inventory - Characters | My Metafarm</title>
        <meta name="description" content="Inventory - Characters | My Metafarm" />
      </Head>
      <Box className="text-white text-sm">In development...</Box>
    </>
  );
};

MarketplaceInventoryCharacters.getLayout = getLayoutMarketplaceInventory;

export default MarketplaceInventoryCharacters;
