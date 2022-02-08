import { Box } from '@whammytechvn/wt-components';
import { getLayoutMarketplaceOffset } from 'components/layouts/pages/getLayoutMarketplace';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const MarketplaceWallet: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Wallet | My Metafarm</title>
        <meta name="description" content="Wallet | My Metafarm" />
      </Head>
      <Box className="text-white text-sm">In development...</Box>
    </>
  );
};

MarketplaceWallet.getLayout = getLayoutMarketplaceOffset;

export default MarketplaceWallet;
