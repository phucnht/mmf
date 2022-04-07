import { Box } from '@whammytechvn/wt-components';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Inventory: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/inventory/airdrop');
  }, [router]);

  return (
    <>
      <Head>
        <title>Inventory | My Metafarm</title>
        <meta name="description" content="Inventory | My Metafarm" />
      </Head>
      <Box className="text-white text-sm">Redirecting...</Box>
    </>
  );
};

export default Inventory;
