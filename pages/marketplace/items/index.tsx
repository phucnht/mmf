import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import { getLayoutMarketplaceInventory } from 'components/layouts/pages/marketplace/getLayoutMarketplaceInventory';
import MarketplaceItemCardList from 'components/pages/marketplace/items/MarketplaceItemCardList';

const MarketplaceItems: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Marketplace - Items | My Metafarm</title>
        <meta name="description" content="Marketplace - Items | My Metafarm" />
      </Head>
      <MarketplaceItemCardList />
    </>
  );
};

MarketplaceItems.getLayout = getLayoutMarketplaceInventory;

export default MarketplaceItems;
