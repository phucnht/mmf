import { Box } from '@whammytechvn/wt-components';
import { getLayoutInventoryOffset } from 'components/layouts/pages/inventory/getLayoutInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const MarketplaceUpgrade: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Upgrade | My Metafarm</title>
        <meta name="description" content="Upgrade | My Metafarm" />
      </Head>
      <Box className="text-white text-sm">In development...</Box>
    </>
  );
};

MarketplaceUpgrade.getLayout = getLayoutInventoryOffset;

export default MarketplaceUpgrade;
