import { Box, Flex, Grid, GridBox, Heading, Text } from '@whammytechvn/wt-components';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import _map from 'lodash/map';

import imgEvent1 from 'public/media/landing/event-1.png';
import imgEvent2 from 'public/media/landing/event-2.png';
import imgEvent3 from 'public/media/landing/event-3.png';

import imgMetaverseCity2 from 'public/media/landing/metaverse-city-2.png';

import imgMarketplaceItems from 'public/media/landing/marketplace-items.png';
import imgMarketplaceProgress from 'public/media/landing/marketplace-progress.png';
import imgMarketplaceCharacter from 'public/media/landing/marketplace-character.png';

import Image from 'components/display/image/CustomImage';
import classNames from 'classnames';
import imgWelcome from 'public/media/landing/welcome.png';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import VideoAutoPlayback from 'components/video/VideoAutoPlayback';
import Link from 'components/navigation/link/Link';
import Canvas3D from 'components/3d/Canvas3D';

const mocks = [
  {
    id: 1,
    imgSrc: imgEvent1,
    tag: 'Update',
    title: 'Event Updates',
    badge: 'Hot',
    content: 'Airdrop is happening - Join to get attractive NFTs.',
    date: '13:56 15/03/2022',
    href: 'https://news.mymetafarm.com/'
  },
  {
    id: 2,
    imgSrc: imgEvent2,
    tag: 'News',
    title: 'Global Ambassador Program',
    content: 'This is an opportunity for you to get deeply integrated into My Meta Farm and our growth journey.',
    date: '13:56 15/03/2022',
    href: 'https://news.mymetafarm.com/the-global-ambassador-a1-contest/'
  },
  {
    id: 3,
    imgSrc: imgEvent3,
    tag: 'Update',
    title: 'Outstanding Prize',
    content: 'My Meta Farm - The second winner of the GameFi track in Metathon Hackathon.',
    date: '13:56 15/03/2022',
    href: 'https://news.mymetafarm.com/my-meta-farm-the-excellent-second-winner-of-the-gamefi-categories-in-metathon-contest/'
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
        <MetaverseCity />
        <MiniGame />
        <Marketplace />
      </Box>
    </>
  );
};

const LandingVideo = () => {
  return (
    <Box className="relative aspect-video h-screen w-screen z-10">
      <VideoAutoPlayback
        url="https://d9hvi1ehclsbh.cloudfront.net/MyMetaFarmTrailer_1.mp4"
        videoClassName="w-full h-full absolute object-cover"
        className="h-full"
      />
    </Box>
  );
};

const WelcomeToMMF = () => {
  return (
    <Box className="z-[15] relative pb-64 bgg-sky h-full">
      <Box className="z-1 bg-[url('/media/landing/bg-cloud.png')] bg-[length:100%] bg-no-repeat bg-top h-[28vw] max-h-[48.5rem] w-full absolute top-[5vw]" />
      <Box className="bg-[url('/assets/home/home-border.png')] bg-[length:100%] bg-no-repeat bg-top h-[10vw] w-full absolute -top-[3vw]" />
      <Box className="relative w-[70%] mx-auto text-center h-auto min-h-[15rem] max-h-[50rem] -top-[8vw] xl:-top-[6vw] 2xl:-top-[5vw] -mb-[10vw] xl:-mb-[4vw] 2xl:-mb-0">
        <Bounce>
          <Image alt="Welcome" src={imgWelcome} />
        </Bounce>
      </Box>
      <Flex className="relative flex-col items-center justify-center mx-auto">
        <Fade>
          <h1 className="font-['Exo'] font-black uppercase bgg-orange text-clip text-stroke-white text-[9vw] sm:text-[6.5vw] leading-tight">
            Events
          </h1>
          <Text className="text-center font-bold text-[2.4vw] lg:text-[1.8vw] uppercase">
            Latest update about My Meta Farm&#39;s events and news
          </Text>
        </Fade>
      </Flex>
      <Fade>
        <Box className="layout mx-auto mt-14 lg:mt-20">
          <GridBox className="lg:grid-cols-3 gap-20">
            {_map(mocks, item => (
              <LandingEventCard key={item.id} item={item} />
            ))}
          </GridBox>
        </Box>
      </Fade>
    </Box>
  );
};

function LandingEventCard({ item }: { item: any }) {
  const cxCardWrapper = classNames('hover:opacity-90 transition cursor-pointer');

  return (
    <Link href={item.href} target="_blank" rel="noopener">
      <div className={cxCardWrapper}>
        <Box className="relative h-[20rem] lg:full">
          <Image
            alt={item.title}
            src={item.imgSrc}
            layout="fill"
            objectFit="cover"
            className="rounded-[2rem] lg:rounded-none"
          />
          <Box className="absolute left-4 top-4 bg-transparent w-full h-full rounded-[2rem] border-2 border-white" />
        </Box>
        <Flex className="flex-col items-start text-black gap-2 mt-11">
          <Text className="uppercase text-blue-100 text-lg font-black">{item.tag}</Text>
          <Flex className="gap-4 items-center">
            <Heading as="h3" className="uppercase text-2xl !lg:text-[1vw] !font-black">
              {item.title}
            </Heading>
            {item.badge && (
              <Text className="italic text-red-600 animate-pulse uppercase text-xl lg:!text-[1vw] font-black">
                {item.badge}
              </Text>
            )}
          </Flex>
          <Text className="text-sm sm:text-lg xl:text-[1vw] !leading-[1.25]">{item.content}</Text>
          <Text className="text-sm sm:text-lg xl:text-[1vw] !leading-[1.25]">{item.date}</Text>
        </Flex>
      </div>
    </Link>
  );
}

const MetaverseCity = () => {
  return (
    <Box className="bg-[url('/media/landing/metaverse-city-1.png')] bg-[length:100%] bg-no-repeat bg-bottom h-full w-full">
      <Box className="relative bgg-rose py-20 pb-0 lg:py-40">
        <Flex className="px-[5%] flex-col items-end justify-center mx-auto gap-8">
          <Box className="z-[0] bg-[url('/media/landing/border-2.png')] bg-[length:100%] bg-no-repeat bg-left-top w-full h-[40rem] absolute -top-[15%] lg:-top-[20%]" />
          <Fade right>
            <Flex className="items-center justify-center gap-9 h-full">
              <h1 className="font-['Exo'] font-black uppercase bgg-orange text-clip text-stroke-brown text-[9vw] lg:text-[6.5vw] leading-tight">
                Metaverse - City
              </h1>
              <Box className="h-[8vw] w-2 lg:w-4 bgg-orange" />
            </Flex>
          </Fade>
          <Fade right className="w-3/4 lg:w-1/2">
            <Text className="ml-auto w-3/4 lg:w-1/2 text-right font-bold text-sm sm:text-lg xl:text-[1.4vw] !leading-[1.25] text-red-100">
              Where citizens can play, build, own, and monetize virtual experiences. A virtual world allows interacting,
              exchanging, socializing seamlessly with multi other worlds
            </Text>
          </Fade>
          <Flex className="hidden lg:flex items-center mx-auto mt-10 lg:mt-20 w-full">
            <Fade>
              <VideoAutoPlayback
                url="https://d1cqw9qrof1e8g.cloudfront.net/Metaverse_City.mp4"
                videoClassName="w-full rounded-[2rem]"
              />
            </Fade>
            <Box className="hidden lg:block relative h-full w-[80rem]">
              <Fade right>
                <Image alt="Metaverse City 2" src={imgMetaverseCity2} />
              </Fade>
            </Box>
          </Flex>
        </Flex>
        <Box className="block lg:hidden mt-20">
          <Fade>
            <VideoAutoPlayback
              url="https://d1cqw9qrof1e8g.cloudfront.net/Metaverse_City.mp4"
              videoClassName="w-full lg:rounded-[2rem]"
            />
          </Fade>
        </Box>
      </Box>
    </Box>
  );
};

const MiniGame = () => {
  return (
    <Box className="relative">
      <Grid className="z-[15] lg:grid-cols-2 relative bgg-rose py-20 2xl:py-40 lg:pb-64 2xl:pb-[30rem] px-[5%] h-full w-full gap-20">
        <Flex className="relative flex-col items-start gap-6 w-full">
          <Fade left>
            <Flex className="items-center justify-center gap-9 whitespace">
              <Box className="h-[8vw] w-2 lg:w-4 bgg-orange" />
              <h1 className="font-['Exo'] font-black uppercase bgg-orange text-clip text-stroke-brown text-[9vw] lg:text-[6.5vw] leading-tight">
                Minigame
              </h1>
            </Flex>
          </Fade>
          <Fade left>
            <Text className="text-left font-bold text-sm sm:text-lg xl:text-[1.4vw] !leading-[1.25] text-red-100">
              With fun and diverse gameplays, minigames completely become a playground where citizens can relax, make
              new friends, and earn NFTs.
            </Text>
          </Fade>
        </Flex>
        <Box className="hidden lg:block">
          <Fade>
            <VideoAutoPlayback
              url="https://d1cqw9qrof1e8g.cloudfront.net/MiniGame.mp4"
              className="m-10"
              videoClassName="w-full rounded-[2rem]"
            />
          </Fade>
        </Box>
      </Grid>
      <Box className="block lg:hidden">
        <Fade>
          <VideoAutoPlayback
            url="https://d1cqw9qrof1e8g.cloudfront.net/MiniGame.mp4"
            videoClassName="w-full lg:rounded-[2rem]"
          />
        </Fade>
      </Box>
      <Box className="z-[20] bg-[url('/media/landing/border-3-left.png')] bg-[length:70%] lg:bg-[length:50%] bg-no-repeat bg-left-bottom h-3/4 w-1/2 absolute left-0 -bottom-[5%] lg:-bottom-[10%]" />
      <Box className="z-[20] bg-[url('/media/landing/border-3-right.png')] bg-[length:70%] lg:bg-[length:50%] bg-no-repeat bg-right-bottom h-3/4 w-1/2 absolute right-0 -bottom-[4%] lg:-bottom-[8%]" />
    </Box>
  );
};

const Marketplace = () => {
  return (
    <Box className="z-[15] relative bg-[url('/media/landing/marketplace-bg.png')] bg-[length:110%_110%] bg-no-repeat bg-top h-full w-ful gap-20">
      <Flex className="flex-col relative bgg-blue-both py-20 lg:py-40 w-full h-full px-[5%] gap-20 lg:gap-40">
        <Flex className="relative flex-col items-center justify-center mx-auto gap-8">
          <Bounce>
            <h1 className="font-['Exo'] font-black uppercase bgg-orange text-clip text-stroke-white text-[9vw] lg:text-[6.5vw] leading-tight">
              Marketplace
            </h1>
          </Bounce>
          <Fade>
            <Text className="mx-auto w-3/4 lg:w-1/2 font-bold text-sm sm:text-lg xl:text-[1.4vw] !leading-[1.25] text-center">
              Where players exchange various digital assets generated in the Metaverse and experience the trading
              platform on the website or even in the game.
            </Text>
          </Fade>
        </Flex>
        <Flex className="relative items-center justify-center mx-auto">
          <Box className="relative w-full h-full px-[5%] pr-[15%]">
            <Bounce>
              <Image alt="Welcome" src={imgMarketplaceItems} />
            </Bounce>
          </Box>
          <Box className="absolute right-0 -top-[20%] w-1/4 h-full">
            {/* <Bounce className="h-full">
              <Canvas3D
                url="https://master.mymetafarm.com/Items/9/9_model.fbx"
                urlTexture="https://master.mymetafarm.com/Items/9/9_texture.png"
                alt="Character"
                imgFallback={'https://master.mymetafarm.com/BG.png'}
                className="min-h-[28vw] 2xl:min-h-[40rem]"
              />
            </Bounce> */}
            <Bounce>
              <Image alt="Welcome" src={imgMarketplaceCharacter} />
            </Bounce>
          </Box>
        </Flex>
        <Box className="relative w-1/2 mx-auto">
          <Image alt="Welcome" src={imgMarketplaceProgress} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
