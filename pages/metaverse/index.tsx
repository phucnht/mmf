import Head from 'next/head';
import Image from 'components/display/image/Image';

import { Box, Stack } from '@whammytechvn/wt-components';

import imgMetaverse from 'public/assets/metaverse/metaverse.png';
import { NextPageWithLayout } from 'pages/_app';
import { getLayoutDefault } from 'components/layouts/pages/default/getLayoutDefault';
import MetaverseCardList from 'components/pages/metaverse/MetaverseCardList';

const Metaverse: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Metaverse | My Metafarm</title>
        <meta name="description" content="Metaverse | My Metafarm" />
      </Head>
      <Stack className="flex-col gap-16 layout mx-auto lg:mt-32 z-10">
        <Box className="-mt-48 lg:-mt-56 flex flex-col max-w-[85%] h-auto">
          <Image alt="Welcome Metaverse" src={imgMetaverse} />
        </Box>
        <MetaverseCardList />
      </Stack>
    </>
  );
};

Metaverse.getLayout = getLayoutDefault;

export default Metaverse;
