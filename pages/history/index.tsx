import EmptyBanner from 'components/display/empty/EmptyBanner';
import { LayoutInventoryOffset } from 'components/layouts/pages/inventory/LayoutInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const MarketplaceHistory: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>History | My Metafarm</title>
        <meta name="description" content="History | My Metafarm" />
      </Head>
      <EmptyBanner />
    </>
  );
};

MarketplaceHistory.getLayout = LayoutInventoryOffset;

export default MarketplaceHistory;
