import { Box } from '@whammytechvn/wt-components';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Dashboard: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard/dashboard');
  }, [router]);

  return (
    <>
      <Head>
        <title>Dashboard | My Meta Farm</title>
        <meta name="description" content="Dashboard | My Meta Farm" />
      </Head>
    </>
  );
};

export default Dashboard;
