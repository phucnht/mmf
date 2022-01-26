import { Box, Stack } from '@whammytechvn/wt-components';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import imgAirdropBanner from 'public/assets/airdrop/metaverse.png';
import CardAirdrop from './components/card/AirdropCard';

const Airdrop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Airdrop | My Metafarm</title>
        <meta name="description" content="Airdrop | My Metafarm" />
      </Head>
      <Stack className="flex-col px-12 gap-16 container justify-center">
        <Box className="-mt-56 flex flex-col">
          <Image alt="Welcome Metaverse" src={imgAirdropBanner} />
        </Box>
        <CardAirdrop />
        <CardAirdrop />
      </Stack>
    </>
  );
};

export default Airdrop;
