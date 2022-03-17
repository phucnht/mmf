import { Box, ButtonImage, Container, Flex, GridBox, Heading, Stack, Text } from '@whammytechvn/wt-components';
import Head from 'next/head';
import { FC } from 'react';
import { NextPageWithLayout } from './_app';
import _map from 'lodash/map';

import imgEvent1 from 'public/media/landing/event-1.png';
import imgEvent2 from 'public/media/landing/event-2.png';
import imgEvent3 from 'public/media/landing/event-3.png';

import imgMetaverseCity1 from 'public/media/landing/metaverse-city-1.png';
import imgMetaverseCity2 from 'public/media/landing/metaverse-city-2.png';

import Image from 'components/display/image/CustomImage';
import classNames from 'classnames';
import ReactPlayer from 'react-player/lazy';
import imgWelcome from 'public/media/landing/welcome.png';

const HOME_CONTENT =
  'Donec nec congue turpis. Nullam feugiat mi consequat interdum tempus. Etiam lorem nisl, semper at convallis ac, dictum eu magna. Praesent non urna tempus, hendrerit nulla sit amet, interdum sapien. Nunc pretium ';

const mocks = [
  {
    id: 1,
    imgSrc: imgEvent1,
    tag: 'Update',
    title: 'Event Updates',
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
        <MetaverseCity />
        {/* <SystemInformation /> */}
        {/* <Hero />
      <SystemInformation />
      <GameInformation /> */}
      </Box>
    </>
  );
};

const LandingVideo = () => {
  return (
    <Box className="relative aspect-video h-full w-screen z-10">
      <ReactPlayer
        url="https://www.youtube.com/embed/qoyYn01QDT8"
        title="My Meta Farm Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        playing
        width="100%"
        height="100%"
      />
    </Box>
  );
};

const WelcomeToMMF = () => {
  return (
    <Box className="z-[15] relative py-40 bgg-sky h-full">
      <Box className="bg-[url('/assets/home/home-border.png')] bg-auto bg-left h-[17rem] w-full absolute -top-[5rem]" />
      {/* <Box className="bg-[url('/media/home/home-border.png')] bg-auto bg-left h-[17rem] w-full absolute top-0" /> */}
      <Box className="relative w-[70%] mx-auto -mt-[20%] h-[54rem]">
        <Image alt="Welcome" src={imgWelcome} fill="layout" objectFit="cover" />
      </Box>
      <Flex className="relative flex-col items-center justify-center mx-auto">
        <h1 className="font-['Exo'] font-black uppercase bgg-text-orange-white text-[9.6rem] leading-tight">Events</h1>
        <Text className="font-bold text-2xl uppercase">Latest update about My Meta Farm&#39;s events and news</Text>
      </Flex>
      <Box className="px-[15%] mx-auto mt-20">
        <GridBox className="grid-cols-3 gap-20">
          {_map(mocks, item => (
            <LandingEventCard key={item.id} item={item} />
          ))}
        </GridBox>
      </Box>
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
        <Heading as="h3" className="uppercase text-2xl !font-black">
          {item.title}
        </Heading>
        <Text className="text-lg">{item.content}</Text>
        <Text className="text-lg">{item.date}</Text>
      </Flex>
    </div>
  );
}

const MetaverseCity = () => {
  return (
    <Box className="z-[15] relative bg-[url('/media/landing/metaverse-city-1.png')] bg-[length:120%_120%] bg-no-repeat bg-bottom h-full w-ful">
      <Box className="relative bgg-rose py-40">
        <Box className="z-[15] bg-[url('/media/landing/side-tree.png')] bg-[length:80%_80%] bg-no-repeat bg-left h-[52.1rem] w-[27.5rem] absolute left-0 -top-[20%]" />
        <Flex className="px-[5%] relative flex-col items-end justify-center mx-auto">
          <h1 className="font-['Exo'] font-black uppercase bgg-text-orange-brown text-[9.6rem] leading-tight">
            Metaverse - City
          </h1>
          <Text className="w-1/2 text-right font-bold text-xl uppercase text-red-100">
            Where citizens can play, build, own, and monetize virtual experiences. A virtual world allows interacting,
            exchanging, socializing seamlessly with multi other worlds
          </Text>
          <Flex className="items-center mx-auto mt-20">
            <Image alt={'Metaverse City 1'} src={imgMetaverseCity1} />
            <Box className="relative h-full w-[80rem]">
              <Image alt={'Metaverse City 2'} src={imgMetaverseCity2} />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

// const Hero = () => {
//   return (
//     <>
//       <Box className="absolute -mt-[11rem] w-full h-[80rem] bg-[#AED8FF] z-[2]">
//         <Box className="layout relative h-full w-full">
//           <Box className="bg-[url('/assets/home/home-hero.png')] bg-auto bg-no-repeat bg-left w-full max-w-[88rem] h-full max-h-[55rem] absolute bottom-0 right-0"></Box>
//         </Box>
//       </Box>
//       <Box className="-mt-48 h-[70rem] pt-96 z-[5] relative">
//         <Box className="layout">
//           <Flex className="flex-col items-start max-w-4xl 2xl:max-w-5xl">
//             <Heading as="h1" className="hidden">
//               My Meta Farm
//             </Heading>
//             <Box className="bg-[url('/assets/home/home-hero-title.svg')] bg-no-repeat bg-auto bg-center w-[68rem] h-32" />
//             <Text className="text-blue-400 text-xl uppercase mt-6">{HOME_CONTENT}</Text>
//             <ButtonImage
//               imgSrc="/assets/home/home-hero-cta.png"
//               className="h-[6.2rem] w-[20rem] mt-8 text-[4.8rem] font-black text-blue-300"
//             >
//               Play
//             </ButtonImage>
//           </Flex>
//         </Box>
//       </Box>
//     </>
//   );
// };

// const HomeBlock: FC<{ title: string }> = ({ title, children }) => {
//   return (
//     <Box className="z-[5] relative -mt-20 py-40">
//       <Box className="bg-[url('/assets/home/home-border.png')] bg-auto bg-left h-[17rem] w-full absolute top-0" />
//       <Box>
//         <Stack className="relative justify-center mt-36 mb-20">
//           <Box className="bg-[url('/assets/home/home-title-banner.svg')] bg-center bg-auto w-[65rem] h-[14rem]" />
//           <Heading className="w-full text-center absolute !text-[3.6rem] text-white !font-black uppercase mb-4">
//             {title}
//           </Heading>
//         </Stack>
//         <Box className="layout">{children}</Box>
//       </Box>
//     </Box>
//   );
// };

// const SystemInformation = () => {
//   return (
//     <HomeBlock title="System Information">
//       <GridBox className="grid-cols-3 gap-20">
//         {_map(mocks, item => (
//           <LandingEventCard key={item.id} item={item} />
//         ))}
//       </GridBox>
//     </HomeBlock>
//   );
// };

// const GameInformation = () => {
//   return (
//     <HomeBlock title="Game Information">
//       <Flex className="flex-col items-center">
//         <Container className="aspect-video mb-20 px-20 relative">
//           <ReactPlayer
//             url="https://www.youtube.com/embed/qoyYn01QDT8"
//             title="My Meta Farm Trailer"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             playing
//             className="absolute top-0 left-0 w-full h-full rounded-[2rem] overflow-hidden"
//             style={{ borderRadius: '2rem' }}
//             width="100%"
//             height="100%"
//             light="/assets/home/home-game-light.png"
//             playIcon={
//               <ButtonImage imgSrc="/assets/home/home-game-play.svg" className="h-[21.4rem] w-[13.8rem] !bg-auto" />
//             }
//           />
//         </Container>
//         <Text className="text-white uppercase text-xl text-center font-black max-w-[100rem]">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec congue turpis. Nullam feugiat mi consequat
//           interdum tempus. Etiam lorem nisl, semper at convallis ac, dictum eu magna. Praesent non urna tempus,
//           hendrerit nulla sit amet, interdum sapien. Nunc pretium hendrerit faucibus. Suspendisse potenti. Maecenas vel
//           urna pretium mauris finibus finibus ac at magna. Fusce quam leo, volutpat eget ultrices non, ullamcorper id
//           augue. Duis venenatis urna dolor, id semper velit suscipit sit amet. Nunc sed felis in nunc pharetra
//           vestibulum.
//         </Text>
//       </Flex>
//     </HomeBlock>
//   );
// };

export default Home;
