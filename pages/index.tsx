import { Box, ButtonImage, Container, Flex, GridBox, Heading, Stack, Text } from '@whammytechvn/wt-components';
import Head from 'next/head';
import { FC } from 'react';
import { NextPageWithLayout } from './_app';
import _map from 'lodash/map';
import imgHomeSys1 from 'public/assets/home/home-sys-1.png';
import imgHomeSys2 from 'public/assets/home/home-sys-2.png';
import imgHomeSys3 from 'public/assets/home/home-sys-3.png';
import imgHomeSys4 from 'public/assets/home/home-sys-4.png';
import imgHomeSys5 from 'public/assets/home/home-sys-5.png';
import imgHomeSys6 from 'public/assets/home/home-sys-6.png';
import Image from 'components/display/image/Image';
import classNames from 'classnames';
import ReactPlayer from 'react-player/lazy';

const HOME_CONTENT =
  'Donec nec congue turpis. Nullam feugiat mi consequat interdum tempus. Etiam lorem nisl, semper at convallis ac, dictum eu magna. Praesent non urna tempus, hendrerit nulla sit amet, interdum sapien. Nunc pretium ';

const mocks = [
  {
    id: 1,
    imgSrc: imgHomeSys1,
    tag: 'Update',
    title: 'Detail Update v1.2',
    content:
      'Donec nec congue turpis. Nullam feugiat mi consequat interdum tempus. Etiam lorem nisl, semper at convallis ac, dictum eu magna.',
    date: '13:56 17/02/2022'
  },
  {
    id: 2,
    imgSrc: imgHomeSys2,
    tag: 'Update',
    title: 'Detail Update v1.2',
    content:
      'Donec nec congue turpis. Nullam feugiat mi consequat interdum tempus. Etiam lorem nisl, semper at convallis ac, dictum eu magna.',
    date: '13:56 17/02/2022'
  },
  {
    id: 3,
    imgSrc: imgHomeSys3,
    tag: 'Update',
    title: 'Detail Update v1.2',
    content:
      'Donec nec congue turpis. Nullam feugiat mi consequat interdum tempus. Etiam lorem nisl, semper at convallis ac, dictum eu magna.',
    date: '13:56 17/02/2022'
  },
  {
    id: 4,
    imgSrc: imgHomeSys4,
    tag: 'News game',
    title: 'You can already earn more tokens for the next 2 weeks in the fishing event',
    content:
      'Donec nec congue turpis. Nullam feugiat mi consequat interdum tempus. Etiam lorem nisl, semper at convallis ac, dictum eu magna.',
    date: '13:56 17/02/2022'
  },
  {
    id: 5,
    imgSrc: imgHomeSys5,
    tag: 'Events',
    title: 'treasure hunt event',
    content:
      'Donec nec congue turpis. Nullam feugiat mi consequat interdum tempus. Etiam lorem nisl, semper at convallis ac, dictum eu magna.',
    date: '13:56 17/02/2022'
  },
  {
    id: 6,
    imgSrc: imgHomeSys6,
    tag: 'Notification',
    title: 'server maintenance',
    content:
      'Donec nec congue turpis. Nullam feugiat mi consequat interdum tempus. Etiam lorem nisl, semper at convallis ac, dictum eu magna.',
    date: '13:56 17/02/2022'
  }
];

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>My Metafarm</title>
        <meta name="description" content="My Metafarm" />
      </Head>
      <Hero />
      <SystemInformation />
      <GameInformation />
    </>
  );
};

const Hero = () => {
  return (
    <>
      <Box className="absolute -mt-[11rem] w-full h-[80rem] bg-[#AED8FF] z-[2]">
        <Box className="layout relative h-full w-full">
          <Box className="bg-[url('/assets/home/home-hero.png')] bg-auto bg-no-repeat bg-left w-full max-w-[88rem] h-full max-h-[55rem] absolute bottom-0 right-0"></Box>
        </Box>
      </Box>
      <Box className="-mt-48 h-[70rem] pt-96 z-[5] relative">
        <Box className="layout">
          <Flex className="flex-col items-start max-w-4xl 2xl:max-w-5xl">
            <Heading as="h1" className="hidden">
              My Meta Farm
            </Heading>
            <Box className="bg-[url('/assets/home/home-hero-title.svg')] bg-no-repeat bg-auto bg-center w-[68rem] h-32" />
            <Text className="text-blue-400 text-xl uppercase mt-6">{HOME_CONTENT}</Text>
            <ButtonImage
              imgSrc="/assets/home/home-hero-cta.png"
              className="h-[6.2rem] w-[20rem] mt-8 text-[4.8rem] font-black text-blue-300"
            >
              Play
            </ButtonImage>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

const HomeBlock: FC<{ title: string }> = ({ title, children }) => {
  return (
    <Box className="z-[5] relative -mt-20 py-40">
      <Box className="bg-[url('/assets/home/home-border.png')] bg-auto bg-left h-[17rem] w-full absolute top-0" />
      <Box>
        <Stack className="relative justify-center mt-36 mb-20">
          <Box className="bg-[url('/assets/home/home-title-banner.svg')] bg-center bg-auto w-[65rem] h-[14rem]" />
          <Heading className="w-full text-center absolute !text-[3.6rem] text-white !font-black uppercase mb-4">
            {title}
          </Heading>
        </Stack>
        <Box className="layout">{children}</Box>
      </Box>
    </Box>
  );
};

const SystemInformation = () => {
  return (
    <HomeBlock title="System Information">
      <GridBox className="grid-cols-3 gap-20">
        {_map(mocks, item => (
          <SystemInformationCard key={item.id} item={item} />
        ))}
      </GridBox>
    </HomeBlock>
  );
};

function SystemInformationCard({ item }: { item: any }) {
  const cxCardWrapper = classNames('hover:opacity-90 transition cursor-pointer');

  return (
    <div className={cxCardWrapper}>
      <Box className="relative">
        <Image alt={item.title} src={item.imgSrc} />
        <Box className="absolute left-4 top-4 bg-transparent w-full h-full rounded-[2rem] border-2 border-white" />
      </Box>
      <Flex className="flex-col items-start text-white gap-2 mt-11">
        <Text className="uppercase text-blue-100 text-xl font-black">{item.tag}</Text>
        <Heading as="h3" className="uppercase text-3xl font-black">
          {item.title}
        </Heading>
        <Text className="uppercase text-xl">{item.content}</Text>
        <Text className="text-xl">{item.date}</Text>
      </Flex>
    </div>
  );
}

const GameInformation = () => {
  return (
    <HomeBlock title="Game Information">
      <Flex className="flex-col items-center">
        <Container className="aspect-video mb-20 px-20 relative">
          <ReactPlayer
            url="https://www.youtube.com/embed/qoyYn01QDT8"
            title="My Meta Farm Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            playing
            className="absolute top-0 left-0 w-full h-full rounded-[2rem] overflow-hidden"
            style={{ borderRadius: '2rem' }}
            width="100%"
            height="100%"
            light="/assets/home/home-game-light.png"
            playIcon={
              <ButtonImage imgSrc="/assets/home/home-game-play.svg" className="h-[21.4rem] w-[13.8rem] !bg-auto" />
            }
          />
        </Container>
        <Text className="text-white uppercase text-xl text-center font-black max-w-[100rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec congue turpis. Nullam feugiat mi consequat
          interdum tempus. Etiam lorem nisl, semper at convallis ac, dictum eu magna. Praesent non urna tempus,
          hendrerit nulla sit amet, interdum sapien. Nunc pretium hendrerit faucibus. Suspendisse potenti. Maecenas vel
          urna pretium mauris finibus finibus ac at magna. Fusce quam leo, volutpat eget ultrices non, ullamcorper id
          augue. Duis venenatis urna dolor, id semper velit suscipit sit amet. Nunc sed felis in nunc pharetra
          vestibulum.
        </Text>
      </Flex>
    </HomeBlock>
  );
};

export default Home;
