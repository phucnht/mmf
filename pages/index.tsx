import { Box, Flex, GridBox, Heading, Text } from '@whammytechvn/wt-components';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import _map from 'lodash/map';

import imgEvent1 from 'public/media/landing/event-1.png';
import imgEvent2 from 'public/media/landing/event-2.png';
import imgEvent3 from 'public/media/landing/event-3.png';

import imgMetaverseCity2 from 'public/media/landing/metaverse-city-2.png';

import imgMarketplaceItems from 'public/media/landing/marketplace-items.png';
import imgMarketplaceCharacter from 'public/media/landing/marketplace-character.png';
import imgMarketplaceProgress from 'public/media/landing/marketplace-progress.png';

import Image from 'components/display/image/CustomImage';
import classNames from 'classnames';
import imgWelcome from 'public/media/landing/welcome.png';
import Canvas3D from 'components/3d/Canvas3D';

import { AnimationOnScroll } from 'react-animation-on-scroll';

const mocks = [
  {
    id: 1,
    imgSrc: imgEvent1,
    tag: 'Update',
    title: 'Event Updates',
    badge: 'Hot',
    content: 'Airdrop is happening - Join to get attractive NFTs.',
    date: '13:56 15/03/2022'
  },
  {
    id: 2,
    imgSrc: imgEvent2,
    tag: 'News',
    title: 'Global Ambassador Program',
    content: 'This is an opportunity for you to get deeply integrated into My Meta Farm and our growth journey.',
    date: '13:56 15/03/2022'
  },
  {
    id: 3,
    imgSrc: imgEvent3,
    tag: 'Update',
    title: 'Outstanding Prize',
    content: 'My Meta Farm- The second winner of the GameFi track  in Metathon Hackathon.',
    date: '13:56 15/03/2022'
  }
];

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>My Metafarm</title>
        <meta name="description" content="My Metafarm" />
      </Head>
      <Box className="grow bg-white">
        <LandingVideo />
        <WelcomeToMMF />
        <AnimationOnScroll animateIn="animate__bounceIn" animateOnce>
          <MetaverseCity />
        </AnimationOnScroll>
        <MiniGame />
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
          <Marketplace />
        </AnimationOnScroll>
      </Box>
    </>
  );
};

const LandingVideo = () => {
  return (
    <Box className="relative aspect-video h-full w-screen z-10">
      <video loop autoPlay className="w-full" muted>
        <source src={'https://d1cqw9qrof1e8g.cloudfront.net/HomePage.mp4'} type="video/mp4" />
      </video>
    </Box>
  );
};

const WelcomeToMMF = () => {
  return (
    <Box className="z-[15] relative py-40 pb-64 bgg-sky h-full">
      <Box className="z-1 bg-[url('/media/landing/bg-cloud.png')] bg-[length:100%] bg-no-repeat bg-top h-full w-full absolute top-[5%]" />
      <Box className="bg-[url('/assets/home/home-border.png')] bg-auto bg-left h-[17rem] w-full absolute -top-[5rem]" />
      {/* <Box className="bg-[url('/media/home/home-border.png')] bg-auto bg-left h-[17rem] w-full absolute top-0" /> */}
      <AnimationOnScroll animateIn="animate__tada" animateOnce>
        <Box className="relative w-[70%] mx-auto -mt-[15%] h-[54rem]">
          <Image alt="Welcome" src={imgWelcome} fill="layout" objectFit="cover" />
        </Box>
        <Flex className="relative flex-col items-center justify-center mx-auto">
          <h1 className="font-['Exo'] font-black uppercase bgg-orange text-clip text-stroke-white text-[6vw] leading-tight">
            Events
          </h1>
          <Text className="font-bold text-[1.4vw] uppercase">
            Latest update about My Meta Farm&#39;s events and news
          </Text>
        </Flex>
        <Box className="px-[15%] mx-auto mt-20">
          <GridBox className="grid-cols-3 gap-20">
            {_map(mocks, item => (
              <LandingEventCard key={item.id} item={item} />
            ))}
          </GridBox>
        </Box>
      </AnimationOnScroll>
    </Box>
  );
};

function LandingEventCard({ item }: { item: any }) {
  const cxCardWrapper = classNames('hover:opacity-90 transition cursor-pointer');

  return (
    <div className={cxCardWrapper}>
      <Box className="relative">
        <Image alt={item.title} src={item.imgSrc} />
        <Box className="absolute left-4 top-4 bg-transparent w-full h-full rounded-[2rem] border-2 border-white" />
      </Box>
      <Flex className="flex-col items-start text-black gap-2 mt-11">
        <Text className="uppercase text-blue-100 text-lg font-black">{item.tag}</Text>
        <Flex className="gap-4">
          <Heading as="h3" className="uppercase text-[1.4vw] !font-black">
            {item.title}
          </Heading>
          {item.badge && (
            <Text className="italic text-red-600 animate-pulse duration-50 uppercase text-[1.4vw] font-black">
              {item.badge}
            </Text>
          )}
        </Flex>
        <Text className="text-[1vw]">{item.content}</Text>
        <Text className="text-[1vw]">{item.date}</Text>
      </Flex>
    </div>
  );
}

const MetaverseCity = () => {
  return (
    <Box className="relative">
      <Box className="z-[20] bg-[url('/media/landing/border-2.png')] bg-[length:100%] bg-no-repeat bg-top h-full w-full absolute -top-[25%]" />
      <Box className="z-[15] relative bg-[url('/media/landing/metaverse-city-1.png')] bg-[length:100%] bg-no-repeat bg-bottom h-full w-ful">
        <Box className="bg-[url('/media/landing/border-2.png')] bg-auto bg-left h-[17rem] w-full absolute top-0" />
        <Box className="relative bgg-rose py-40">
          <Flex className="px-[5%] relative flex-col items-end justify-center mx-auto gap-8">
            <Flex className="items-center justify-center gap-9 h-full">
              <h1 className="font-['Exo'] font-black uppercase bgg-orange text-clip text-stroke-brown text-[6vw] leading-tight">
                Metaverse - City
              </h1>
              <Box className="h-[8vw] w-4 bgg-orange" />
            </Flex>
            <Text className="w-1/2 text-right font-bold text-[1.4vw] text-red-100">
              Where citizens can play, build, own, and monetize virtual experiences. A virtual world allows interacting,
              exchanging, socializing seamlessly with multi other worlds
            </Text>
            <Flex className="items-center mx-auto mt-20">
              <video loop autoPlay className="w-full rounded-[2rem]" muted>
                <source src={'https://d1cqw9qrof1e8g.cloudfront.net/Metaverse_City.mp4'} type="video/mp4" />
              </video>
              <Box className="relative h-full w-[80rem]">
                <Image alt={'Metaverse City 2'} src={imgMetaverseCity2} />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

const MiniGame = () => {
  return (
    <Box className="relative">
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
        <Flex className="z-[15] relative bgg-rose py-40 pb-64 px-[5%] h-full w-ful gap-20">
          <Flex className="relative flex-col items-start mx-auto gap-6 max-w-3xl">
            <Flex className="items-center justify-center gap-9 whitespace">
              <Box className="h-[8vw] w-4 bgg-orange" />
              <h1 className="font-['Exo'] font-black uppercase bgg-orange text-clip text-stroke-brown text-[6vw] leading-tight">
                Minigame
              </h1>
            </Flex>
            <Text className="text-left font-bold text-[1.4vw] text-red-100">
              With fun and diverse gameplays, minigames completely become a playground where citizens can relax, make
              new friends, and earn NFTs.
            </Text>
          </Flex>
          <video loop autoPlay className="w-full rounded-[2rem] m-10" muted>
            <source src={'https://d1cqw9qrof1e8g.cloudfront.net/MiniGame.mp4'} type="video/mp4" />
          </video>
        </Flex>
      </AnimationOnScroll>
      <Box className="z-[20] bg-[url('/media/landing/border-3-left.png')] bg-[length:50%] bg-no-repeat bg-left h-3/4 w-1/2 absolute left-0 -bottom-[19%]" />
      <Box className="z-[20] bg-[url('/media/landing/border-3-right.png')] bg-[length:50%] bg-no-repeat bg-right h-3/4 w-1/2 absolute right-0 -bottom-[30%]" />
    </Box>
  );
};

const Marketplace = () => {
  return (
    <Box className="z-[15] relative bg-[url('/media/landing/marketplace-bg.png')] bg-[length:110%_110%] bg-no-repeat bg-top h-full w-ful gap-20">
      <Flex className="flex-col relative bgg-blue-both py-40 w-full h-full px-[5%] gap-40">
        <Flex className="relative flex-col items-center justify-center mx-auto">
          <h1 className="font-['Exo'] font-black uppercase bgg-orange text-clip text-stroke-white text-[9.6rem] leading-tight">
            Marketplace
          </h1>
          <Text className="w-1/2 font-bold text-[1.4vw] text-center">
            Where players exchange various digital assets generated in the Metaverse and experience the trading platform
            on the website or even in the game.
          </Text>
        </Flex>
        <Flex className="relative items-center justify-center mx-auto">
          <Box className="relative w-full h-full px-[5%] pr-[15%]">
            <Image alt="Welcome" src={imgMarketplaceItems} fill="layout" objectFit="cover" />
          </Box>
          <Box className="absolute right-0 -top-[20%] w-1/4">
            <Image alt="Welcome" src={imgMarketplaceCharacter} />
            {/* <Canvas3D
              url="https://master.mymetafarm.com/Items/9/9_model.fbx"
              alt="Character"
              imgFallback="https://master.mymetafarm.com/BG.png"
            /> */}
          </Box>
        </Flex>
        <Box className="relative w-1/2 mx-auto">
          <Image alt="Welcome" src={imgMarketplaceProgress} fill="layout" objectFit="cover" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
