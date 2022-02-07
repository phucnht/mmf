import { Box } from '@whammytechvn/wt-components';
import { LayoutPageMarketplace } from 'components/layouts/marketplace/LayoutMarketplace';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const MarketplaceAccount: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Account | My Metafarm</title>
        <meta name="description" content="Account | My Metafarm" />
      </Head>
      <Box className="text-white text-sm">In development...</Box>
    </>
  );
};

MarketplaceAccount.Layout = LayoutPageMarketplace;

export default MarketplaceAccount;
