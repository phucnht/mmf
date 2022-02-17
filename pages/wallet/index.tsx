import { Box } from '@whammytechvn/wt-components';
import { getLayoutInventoryOffset } from 'components/layouts/pages/inventory/getLayoutInventory';
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

MarketplaceWallet.getLayout = getLayoutInventoryOffset;

export default MarketplaceWallet;
