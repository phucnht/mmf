import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';

import { getLayoutDashboard } from 'components/layouts/pages/dashboard/getLayoutDashboard';
import DashboardBoxList from 'components/pages/dashboard/box/DashboardBoxList';

const DashboardBox: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard - Buy Box | My Metafarm</title>
        <meta name="description" content="Dashboard - Buy Box | My Metafarm" />
      </Head>
      <DashboardBoxList />
    </>
  );
};

DashboardBox.getLayout = getLayoutDashboard;

export default DashboardBox;
