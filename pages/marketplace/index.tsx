import { Box } from '@whammytechvn/wt-components';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Marketplace: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/marketplace/items');
  }, [router]);

  return (
    <>
      <Head>
        <title>Marketplace | My Meta Farm</title>
        <meta name="description" content="Marketplace | My Meta Farm" />
      </Head>
      <Box className="text-white text-sm">Redirecting...</Box>
    </>
  );
};

export default Marketplace;
