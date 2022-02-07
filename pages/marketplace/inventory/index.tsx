import { LayoutPageMarketplace } from 'components/layouts/marketplace/LayoutMarketplace';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const MarketplaceInventory: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Inventory | My Metafarm</title>
        <meta name="description" content="Inventory | My Metafarm" />
      </Head>
    </>
  );
};

MarketplaceInventory.Layout = LayoutPageMarketplace;

export default MarketplaceInventory;
