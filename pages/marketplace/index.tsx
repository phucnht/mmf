import { Box } from '@whammytechvn/wt-components';
import { NextPage } from 'next';
import Head from 'next/head';

const Marketplace: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marketplace | My Metafarm</title>
        <meta name="description" content="Marketplace | My Metafarm" />
      </Head>
      <Box className="text-white text-sm">Redirecting...</Box>
    </>
  );
};

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/',
      permanent: true
    }
  };
};

export default Marketplace;
