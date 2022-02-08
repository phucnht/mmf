import { Box } from '@whammytechvn/wt-components';
import { getLayoutMarketplaceOffset } from 'components/layouts/pages/getLayoutMarketplace';
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

MarketplaceUpgrade.getLayout = getLayoutMarketplaceOffset;

export default MarketplaceUpgrade;
