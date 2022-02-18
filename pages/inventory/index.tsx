import { Box } from '@whammytechvn/wt-components';
import { NextPage } from 'next';
import Head from 'next/head';

const Inventory: NextPage = () => {
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

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/inventory/airdrop',
      permanent: true
    }
  };
};

export default Inventory;
