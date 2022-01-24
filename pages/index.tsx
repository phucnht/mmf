import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import imgHomeBanner from "../public/assets/airdrop-banner.png";

import { Box, Container } from "@whammytechvn/wt-components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Metafarm</title>
        <meta name="description" content="My Metafarm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className="-mt-16 flex flex-col">
        <Image alt="Welcome Metaverse" src={imgHomeBanner} />
      </Box>
    </>
  );
};

export default Home;
