import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'components/display/Image';

import { Box, Stack } from '@whammytechvn/wt-components';
import AirdropCard from './components/card/AirdropCard';

import imgMetaverse from 'public/assets/airdrop/metaverse.png';
import imgAirdrop1 from 'public/assets/airdrop/airdrop-card-1.png';
import imgAirdrop2 from 'public/assets/airdrop/airdrop-card-2.png';
import imgSubAirdrop1 from 'public/assets/airdrop/airdrop-card-sub-1.png';
import imgSubAirdrop2 from 'public/assets/airdrop/airdrop-card-sub-2.png';

const CARD_CONTENT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec congue turpis. Nullam feugiat mi consequat interdum tempus. Etiam lorem nisl, semper at convallis ac, dictum eu magna. Praesent non urna tempus, hendrerit nulla sit amet';

const CARD_CONDITIONS =
  'The conditions for you to receive this award are: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec congue turpis. ';

const Airdrop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Airdrop | My Metafarm</title>
        <meta name="description" content="Airdrop | My Metafarm" />
      </Head>
      <Stack className="flex-col gap-16 container mx-auto mt-32">
        <Box className="-mt-56 flex flex-col">
          <Image alt="Welcome Metaverse" src={imgMetaverse} />
        </Box>
        <AirdropCard
          content={CARD_CONTENT}
          conditions={CARD_CONDITIONS}
          imgSrc={imgAirdrop1}
          imgAlt="Airdrop 1"
          imgSubSrc={imgSubAirdrop1}
          imgSubAlt="Airdrop Sub 1"
        />
        <AirdropCard
          content={CARD_CONTENT}
          conditions={CARD_CONDITIONS}
          imgSrc={imgAirdrop2}
          imgAlt="Airdrop 2"
          imgSubSrc={imgSubAirdrop2}
          imgSubAlt="Airdrop Sub 2"
        />
      </Stack>
    </>
  );
};

export default Airdrop;
