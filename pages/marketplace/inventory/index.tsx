import LayoutSideMenu from 'layouts/side-menu/LayoutSideMenu';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const Inventory: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Inventory | My Metafarm</title>
        <meta name="description" content="Inventory | My Metafarm" />
      </Head>
    </>
  );
};

Inventory.Layout = LayoutSideMenu;

export default Inventory;
