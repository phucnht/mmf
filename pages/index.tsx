import { Box, Button, Container } from "@whammytechvn/wt-components";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>My Metafarm</title>
        <meta name="description" content="My Metafarm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Button color="primary" content="Dashboard" />
      </Box>
    </Container>
  );
};

export default Home;
