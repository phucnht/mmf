import LayoutMarketplace from 'components/layouts/marketplace/LayoutMarketplace';
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

Upgrade.Layout = LayoutMarketplace;

export default Upgrade;
