import { Box } from '@whammytechvn/wt-components';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Dashboard: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard/box');
  }, [router]);

  return (
    <>
      <Head>
        <title>Dashboard | My Metafarm</title>
        <meta name="description" content="Dashboard | My Metafarm" />
      </Head>
      <Box className="text-white text-sm">Redirecting...</Box>
    </>
  );
};

export default Dashboard;
