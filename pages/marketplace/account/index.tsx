import { Box } from '@whammytechvn/wt-components';
import { getLayoutMarketplaceOffset } from 'components/layouts/pages/getLayoutMarketplace';
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

MarketplaceAccount.getLayout = getLayoutMarketplaceOffset;

export default MarketplaceAccount;
