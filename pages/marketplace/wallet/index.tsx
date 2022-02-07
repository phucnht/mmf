import { LayoutPageMarketplace } from 'components/layouts/marketplace/LayoutMarketplace';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const MarketplaceWallet: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Wallet | My Metafarm</title>
        <meta name="description" content="Wallet | My Metafarm" />
      </Head>
    </>
  );
};

MarketplaceWallet.Layout = LayoutPageMarketplace;

export default MarketplaceWallet;
