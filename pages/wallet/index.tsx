import { Box } from '@whammytechvn/wt-components';
import { LayoutInventoryOffset } from 'components/layouts/pages/inventory/LayoutInventory';
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

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/',
      permanent: true
    }
  };
};

MarketplaceWallet.getLayout = LayoutInventoryOffset;

export default MarketplaceWallet;
