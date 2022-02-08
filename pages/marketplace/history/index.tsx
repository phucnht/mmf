import { Box } from '@whammytechvn/wt-components';
import { getLayoutMarketplaceOffset } from 'components/layouts/pages/getLayoutMarketplace';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const MarketplaceHistory: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>History | My Metafarm</title>
        <meta name="description" content="History | My Metafarm" />
      </Head>
      <Box className="text-white text-sm">In development...</Box>
    </>
  );
};

MarketplaceHistory.getLayout = getLayoutMarketplaceOffset;

export default MarketplaceHistory;
