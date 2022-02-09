import Head from 'next/head';
import Image from 'components/display/image/Image';

import { Box, Stack } from '@whammytechvn/wt-components';
import MetaverseCard from './components/card/MetaverseCard';

import imgMetaverse from 'public/assets/metaverse/metaverse.png';
import imgMetaverse1 from 'public/assets/metaverse/Metaverse-card-1.png';
import imgMetaverse2 from 'public/assets/metaverse/Metaverse-card-2.png';
import imgSubMetaverse1 from 'public/assets/metaverse/Metaverse-card-sub-1.png';
import imgSubMetaverse2 from 'public/assets/metaverse/Metaverse-card-sub-2.png';
import { NextPageWithLayout } from 'pages/_app';
import { getLayoutDefault } from 'components/layouts/pages/getLayoutDefault';

const CARD_CONTENT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec congue turpis. Nullam feugiat mi consequat interdum tempus. Etiam lorem nisl, semper at convallis ac, dictum eu magna. Praesent non urna tempus, hendrerit nulla sit amet';

const CARD_CONDITIONS =
  'The conditions for you to receive this award are: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec congue turpis. ';

const Metaverse: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Metaverse | My Metafarm</title>
        <meta name="description" content="Metaverse | My Metafarm" />
      </Head>
      <Stack className="flex-col gap-16 container mx-auto mt-32">
        <Box className="-mt-56 flex flex-col">
          <Image alt="Welcome Metaverse" src={imgMetaverse} />
        </Box>
        <MetaverseCard
          content={CARD_CONTENT}
          conditions={CARD_CONDITIONS}
          imgSrc={imgMetaverse1}
          imgAlt="Metaverse 1"
          imgSubSrc={imgSubMetaverse1}
          imgSubAlt="Metaverse Sub 1"
        />
        <MetaverseCard
          content={CARD_CONTENT}
          conditions={CARD_CONDITIONS}
          imgSrc={imgMetaverse2}
          imgAlt="Metaverse 2"
          imgSubSrc={imgSubMetaverse2}
          imgSubAlt="Metaverse Sub 2"
        />
      </Stack>
    </>
  );
};

Metaverse.getLayout = getLayoutDefault;

export default Metaverse;
