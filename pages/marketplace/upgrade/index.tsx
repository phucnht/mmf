import LayoutSideMenu from 'layouts/side-menu/LayoutSideMenu';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const Upgrade: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Upgrade | My Metafarm</title>
        <meta name="description" content="Upgrade | My Metafarm" />
      </Head>
    </>
  );
};

Upgrade.Layout = LayoutSideMenu;

export default Upgrade;
