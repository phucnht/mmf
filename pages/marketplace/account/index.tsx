import { LayoutPageMarketplace } from 'components/layouts/marketplace/LayoutMarketplace';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const MarketplaceAccount: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Account | My Metafarm</title>
        <meta name="description" content="Account | My Metafarm" />
      </Head>
    </>
  );
};

MarketplaceAccount.Layout = LayoutPageMarketplace;

export default MarketplaceAccount;
