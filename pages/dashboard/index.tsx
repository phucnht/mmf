import { Box } from '@whammytechvn/wt-components';
import { LayoutPageDefault } from 'components/layouts/default/LayoutDefault';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard | My Metafarm</title>
        <meta name="description" content="Dashboard | My Metafarm" />
      </Head>
      <Box className="text-white text-sm">In development...</Box>
    </>
  );
};

Dashboard.Layout = LayoutPageDefault;

export default Dashboard;
