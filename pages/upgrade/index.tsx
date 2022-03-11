import { Box } from '@whammytechvn/wt-components';
import { LayoutInventoryOffset } from 'components/layouts/pages/inventory/LayoutInventory';
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

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/',
      permanent: true
    }
  };
};

MarketplaceUpgrade.getLayout = LayoutInventoryOffset;

export default MarketplaceUpgrade;
