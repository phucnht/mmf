import LayoutMarketplace from 'components/layouts/marketplace/LayoutMarketplace';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const Account: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Account | My Metafarm</title>
        <meta name="description" content="Account | My Metafarm" />
      </Head>
    </>
  );
};

Account.Layout = LayoutMarketplace;

export default Account;
