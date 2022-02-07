import { LayoutPageMarketplaceInventory } from 'components/layouts/marketplace/LayoutMarketplaceInventory';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const MarketplaceInventoryCharacters: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Inventory - Characters | My Metafarm</title>
        <meta name="description" content="Inventory - Characters | My Metafarm" />
      </Head>
    </>
  );
};

MarketplaceInventoryCharacters.Layout = LayoutPageMarketplaceInventory;

export default MarketplaceInventoryCharacters;
