import EmptyBanner from 'components/display/empty/EmptyBanner';
import { LayoutInventoryOffset } from 'components/layouts/pages/inventory/LayoutInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const MarketplaceHistory: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>History | My Meta Farm</title>
        <meta name="description" content="History | My Meta Farm" />
      </Head>
      <EmptyBanner />
    </>
  );
};

MarketplaceHistory.getLayout = LayoutInventoryOffset;

export default MarketplaceHistory;
