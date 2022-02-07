import { Box } from '@whammytechvn/wt-components';
import { LayoutPageMarketplace } from 'components/layouts/marketplace/LayoutMarketplace';
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

MarketplaceHistory.Layout = LayoutPageMarketplace;

export default MarketplaceHistory;
