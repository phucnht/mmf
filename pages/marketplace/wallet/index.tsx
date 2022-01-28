import LayoutSideMenu from 'layouts/side-menu/LayoutSideMenu';
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

Wallet.Layout = LayoutSideMenu;

export default Wallet;
