import { Box } from '@whammytechvn/wt-components';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import imgAirdropBanner from 'public/assets/airdrop-banner.png';

const Airdrop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Airdrop | My Metafarm</title>
        <meta name="description" content="Airdrop | My Metafarm" />
      </Head>
      <Box className="-mt-16 flex flex-col">
        <Image alt="Welcome Metaverse" src={imgAirdropBanner} />
      </Box>
    </>
  );
};

export default Airdrop;
