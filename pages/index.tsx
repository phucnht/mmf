import { Box } from '@whammytechvn/wt-components';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Metafarm</title>
        <meta name="description" content="My Metafarm" />
      </Head>
      <Box className="text-white text-sm">In development...</Box>
    </>
  );
};

export default Home;
