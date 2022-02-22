import { Box } from '@whammytechvn/wt-components';
import { getLayoutDashboard } from 'components/layouts/pages/dashboard/getLayoutDashboard';
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

Dashboard.getLayout = getLayoutDashboard;

export default Dashboard;
