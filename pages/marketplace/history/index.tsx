import LayoutSideMenu from 'layouts/side-menu/LayoutSideMenu';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const History: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>History | My Metafarm</title>
        <meta name="description" content="History | My Metafarm" />
      </Head>
    </>
  );
};

History.Layout = LayoutSideMenu;

export default History;
