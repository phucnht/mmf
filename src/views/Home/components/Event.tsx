import { CardMedia, Container, Grid } from '@mui/material';

const Event = () => {
  return (
    <div className='relative' style={{ background: 'linear-gradient(180deg, #5da8ec 0%, rgba(0, 113, 188, 0) 100%)' }}>
      <div className='absolute left-0 right-0 -top-[60px]'>
        <CardMedia image={require('../assets/images/home-border.png').default.src} className='h-[160px] w-full' />
        <CardMedia image={require('../assets/images/home-cloud.png').default.src} className='h-[480px] w-full' />
      </div>

      <Container className='py-20 z-10 relative'>
        <img
          src={require('../assets/images/home-logo.webp').default.src}
          className='max-w-[60vw] mx-auto md:-mt-[180px]'
        />
        <div className='home-title text-center'>EVENTS</div>
        <div className='font-bold text-2xl text-center'>LATEST UPDATE ABOUT MY META FARM{"'"}S EVENTS AND NEWS</div>

        <Grid container spacing={5} className='mt-6'>
          {[
            {
              image: require('../assets/images/event-1.gif').default.src,
              type: 'UPDATE',
              title: 'EVENT UPDATES',
              description: 'Airdrop is happening - Join to get attractive NFTs.',
              time: '13:56 15/03/2022',
              url: 'https://news.mymetafarm.com',
            },
            {
              image: require('../assets/images/event-2.gif').default.src,
              type: 'NEWS',
              title: 'GLOBAL AMBASSADOR PROGRAM',
              description:
                'This is an opportunity for you to get deeply integrated into My Meta Farm and our growth journey.',
              time: '13:56 15/03/2022',
              url: 'https://news.mymetafarm.com/the-global-ambassador-a1-contest',
            },
            {
              image: require('../assets/images/event-3.gif').default.src,
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
  );
};

export default Event;
