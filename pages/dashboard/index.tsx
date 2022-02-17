import { Box } from '@whammytechvn/wt-components';
import { getLayoutDefault } from 'components/layouts/pages/default/getLayoutDefault';
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

Dashboard.getLayout = getLayoutDefault;

export default Dashboard;
