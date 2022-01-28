import LayoutMarketplace from 'components/layouts/marketplace/LayoutMarketplace';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const Wallet: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Wallet | My Metafarm</title>
        <meta name="description" content="Wallet | My Metafarm" />
      </Head>
    </>
  );
};

Wallet.Layout = LayoutMarketplace;

export default Wallet;
