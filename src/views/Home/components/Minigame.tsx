import { CardMedia, Container, Grid } from '@mui/material';

const Minigame = () => {
  return (
    <div
      className='relative'
      style={{ background: 'linear-gradient(180deg, #fff2e2 40.1%, rgba(255, 242, 226, 0) 100%)' }}
    >
      <img
        src={require('../assets/images/game-footer-left.png').default.src}
        className='absolute left-0 -bottom-[60px] w-[420px] z-10'
      />
      <img
        src={require('../assets/images/game-footer-right.png').default.src}
        className='absolute right-0 -bottom-[60px] w-[360px] z-10'
      />

      <Container className='py-20 pb-60 z-10 relative'>
        <Grid container spacing={5}>
          <Grid item lg={6}>
            <div>
              <div className='home-title'>MINIGAME</div>
              <div className='font-bold text-2xl text-red-100'>
                With fun and diverse gameplays, minigames completely become a playground where citizens can relax, make
                new friends, and earn NFTs.
              </div>
            </div>
          </Grid>
          <Grid item lg={6}>
            <CardMedia
              component='video'
              src={require('../assets/videos/minigame-web.mp4')}
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
  );
};

export default Minigame;
