import { LayoutPageMarketplace } from 'components/layouts/marketplace/LayoutMarketplace';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const MarketplaceUpgrade: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Upgrade | My Metafarm</title>
        <meta name="description" content="Upgrade | My Metafarm" />
      </Head>
    </>
  );
};

MarketplaceUpgrade.Layout = LayoutPageMarketplace;

export default MarketplaceUpgrade;
