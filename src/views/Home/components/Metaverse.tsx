import { CardMedia, Container, Grid } from '@mui/material';

const Metaverse = () => {
  return (
    <div className='relative' style={{ background: 'linear-gradient(180deg, #fff2e2 40.1%, #af9c95 100%)' }}>
      <div className='absolute left-0 right-0 -top-[120px]'>
        <CardMedia image={require('../assets/images/city-cloud.png').default.src} className='h-[520px] w-full' />
      </div>

      <Container className='py-20 z-10 relative'>
        <div>
          <div className='home-title text-right'>METAVERSE - CITY</div>
          <div className='font-bold text-2xl max-w-[640px] ml-auto text-right text-red-100'>
            Where citizens can play, build, own, and monetize virtual experiences. A virtual world allows interacting,
            exchanging, socializing seamlessly with multi other worlds
          </div>
        </div>

        <Grid container spacing={5} className='mt-6'>
          <Grid item lg={7}>
            <CardMedia
              component='video'
              src={require('../assets/videos/city-web.mp4')}
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
            <img src={require('../assets/images/city-people.webp').default.src} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Metaverse;
