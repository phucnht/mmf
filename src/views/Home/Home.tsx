import { CardMedia, Container, Grid } from '@mui/material';
import { ItemType } from 'models/Item';
import { CardItem } from 'views/Cards';

const items = [
  {
    id: 1,
    name: 'The Grandslam Meta Cap',
    tokenId: 18712375,
    external: { rarity: 'Common', iconUrl: require('assets/home/The Grandslam Meta Cap.webp').default.src },
  },
  {
    id: 2,
    name: 'The Grandslam Meta Glasses',
    tokenId: 18712376,
    external: { rarity: 'Common', iconUrl: require('assets/home/The Grandslam Meta Glasses.webp').default.src },
  },
  {
    id: 3,
    name: 'The Grandslam Meta Shirt',
    tokenId: 18712377,
    external: { rarity: 'Common', iconUrl: require('assets/home/The Grandslam Meta Shirt.webp').default.src },
  },
  {
    id: 4,
    name: 'The Grandslam Meta Shoes',
    tokenId: 18712378,
    external: { rarity: 'Common', iconUrl: require('assets/home/The Grandslam Meta Shoes.webp').default.src },
  },
  {
    id: 5,
    name: 'The Grandslam Meta Bag',
    tokenId: 18712379,
    external: { rarity: 'Common', iconUrl: require('assets/home/The Grandslam Meta Bag.webp').default.src },
  },
];

const Home = () => {
  return (
    <div>
      <CardMedia component='video' src={require('assets/videos/trailer-web.mp4')} autoPlay loop muted controls={false}>
        <div></div>
      </CardMedia>

      <div
        className='relative'
        style={{ background: 'linear-gradient(180deg, #5da8ec 0%, rgba(0, 113, 188, 0) 100%)' }}
      >
        <div className='absolute left-0 right-0 -top-[60px]'>
          <CardMedia image={require('assets/home/home-border.png').default.src} className='h-[160px] w-full' />
          <CardMedia image={require('assets/home/home-cloud.png').default.src} className='h-[480px] w-full' />
        </div>

        <Container className='py-20 z-10 relative'>
          <img src={require('assets/home/home-logo.webp').default.src} className='mx-auto' />
          <div className='home-title text-center'>EVENTS</div>
          <div className='font-bold text-2xl text-center'>LATEST UPDATE ABOUT MY META FARM{"'"}S EVENTS AND NEWS</div>

          <Grid container spacing={5} className='mt-6'>
            {[
              {
                image: require('assets/home/event-1.gif').default.src,
                type: 'UPDATE',
                title: 'EVENT UPDATES',
                description: 'Airdrop is happening - Join to get attractive NFTs.',
                time: '13:56 15/03/2022',
                url: 'https://news.mymetafarm.com',
              },
              {
                image: require('assets/home/event-3.gif').default.src,
                type: 'NEWS',
                title: 'GLOBAL AMBASSADOR PROGRAM',
                description:
                  'This is an opportunity for you to get deeply integrated into My Meta Farm and our growth journey.',
                time: '13:56 15/03/2022',
                url: 'https://news.mymetafarm.com/the-global-ambassador-a1-contest',
              },
              {
                image: require('assets/home/event-2.gif').default.src,
                type: 'NOTIFICATION',
                title: 'OUTSTANDING PRIZE',
                description: 'My Meta Farm - The second winner of the GameFi track  in Metathon Hackathon.',
                time: '13:56 15/03/2022',
                url: 'https://news.mymetafarm.com/my-meta-farm-the-excellent-second-winner-of-the-gamefi-categories-in-metathon-contest',
              },
            ].map((item, index) => (
              <Grid item lg={4} key={index}>
                <CardMedia image={item.image} className='h-[240px] rounded-[16px] border-[2px] border-white mb-3' />
                <div className='font-bold text-lg text-blue-200'>{item.type}</div>
                <a
                  href={item.url}
                  className='font-black text-xl hover:text-secondary-main'
                  target='_blank'
                  rel='noreferrer'
                >
                  {item.title}
                </a>
                <div className='font-semibold my-2'>{item.description}</div>
                <div>{item.time}</div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>

      <div className='relative' style={{ background: 'linear-gradient(180deg, #fff2e2 40.1%, #af9c95 100%)' }}>
        <div className='absolute left-0 right-0 -top-[120px]'>
          <CardMedia image={require('assets/home/city-cloud.png').default.src} className='h-[520px] w-full' />
        </div>

        <Container className='py-20 z-10 relative'>
          <div>
            <div className='home-title text-right'>METAVERSE - CITY</div>
            <div className='font-bold text-2xl w-[640px] ml-auto text-right text-red-100'>
              Where citizens can play, build, own, and monetize virtual experiences. A virtual world allows interacting,
              exchanging, socializing seamlessly with multi other worlds
            </div>
          </div>

          <Grid container spacing={5} className='mt-6'>
            <Grid item lg={7}>
              <CardMedia
                component='video'
                src={require('assets/videos/city-web.mp4')}
                autoPlay
                loop
                muted
                controls={false}
                className='rounded-[16px] border-[2px] border-white'
              >
                <div></div>
              </CardMedia>
            </Grid>
            <Grid item lg={5} className='flex items-center justify-center'>
              <img src={require('assets/home/city-people.webp').default.src} />
            </Grid>
          </Grid>
        </Container>
      </div>

      <div
        className='relative'
        style={{ background: 'linear-gradient(180deg, #fff2e2 40.1%, rgba(255, 242, 226, 0) 100%)' }}
      >
        <img
          src={require('assets/home/game-footer-1.png').default.src}
          className='absolute left-0 -bottom-[60px] w-[420px] z-10'
        />
        <img
          src={require('assets/home/game-footer-2.png').default.src}
          className='absolute right-0 -bottom-[60px] w-[360px] z-10'
        />

        <Container className='py-20 pb-60 z-10 relative'>
          <Grid container spacing={5}>
            <Grid item lg={6}>
              <div>
                <div className='home-title'>MINIGAME</div>
                <div className='font-bold text-2xl text-red-100'>
                  With fun and diverse gameplays, minigames completely become a playground where citizens can relax,
                  make new friends, and earn NFTs.
                </div>
              </div>
            </Grid>
            <Grid item lg={6}>
              <CardMedia
                component='video'
                src={require('assets/videos/minigame-web.mp4')}
                autoPlay
                loop
                muted
                controls={false}
                className='rounded-[16px] border-[2px] border-white'
              >
                <div></div>
              </CardMedia>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div
        className='relative'
        style={{
          backgroundColor: `linear-gradient(#0071bc 0%, rgba(93, 168, 236, 0) 47.4%, #0000 100%)`,
          backgroundImage: `url(${require('assets/home/market-background.png').default.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='absolute left-0 right-0 -top-[60px]'>
          {/* <CardMedia image={require('assets/home/home-border.png').default.src} className='h-[160px] w-full' />
          <CardMedia image={require('assets/home/home-cloud.png').default.src} className='h-[480px] w-full' /> */}
        </div>

        <Container className='py-20 pb-60 z-10 relative'>
          <div className='home-title text-center'>MARKETPLACE</div>
          <div className='font-bold text-2xl w-[640px] text-center mx-auto'>
            Where players exchange various digital assets generated in the Metaverse and experience the trading platform
            on the website or even in the game.
          </div>

          <Grid container spacing={3} className='mt-6'>
            {items.map((item: any) => (
              <Grid item lg={12 / 5} md={4} sm={6} xs={12} key={item.id}>
                <CardItem item={item as ItemType} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Home;
