import { AppBar, Button, Container, Grid, TextField, Toolbar } from '@mui/material';

const Footer = () => {
  return (
    <AppBar component='footer' position='static' elevation={0} color='transparent' className='relative z-[1]'>
      <div
        style={{ background: `url(${require('assets/images/footer-background.png').default.src}) no-repeat bottom` }}
        className='flex items-end h-[720px] bg-cover overflow-hidden'
      >
        <Container maxWidth='md' className='relative py-[160px]'>
          <img
            src={require('assets/images/footer-character.png').default.src}
            className='absolute -left-[240px] bottom-[80px]'
          />
          <img
            src={require('assets/images/footer-tree-1.png').default.src}
            className='absolute -left-[580px] bottom-[20px] w-[400px]'
          />
          <img
            src={require('assets/images/footer-tree-3.png').default.src}
            className='absolute -right-[580px] bottom-[20px] w-[600px]'
          />
          <Grid container spacing={4}>
            <Grid item lg={7} className='flex flex-col items-start gap-3'>
              <div className='font-black'>STAY IN THE LOOP</div>
              <div className='text-sm'>
                Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and
                tricks for navigating My Meta Farm.
              </div>
              <div className='flex gap-3'>
                <TextField placeholder='Enter your email' InputProps={{ className: 'bg-white text-black' }} />
                <Button>Subcribe</Button>
              </div>
            </Grid>
            <Grid item lg={5} className='flex flex-col items-start gap-3'>
              <div className='font-black'>JOIN OUR COMMUNITY</div>
              <div className='flex gap-3'>
                {[
                  { url: '', icon: require('assets/icons/socials/facebook.svg').default.src },
                  { url: '', icon: require('assets/icons/socials/instagram.svg').default.src },
                  { url: '', icon: require('assets/icons/socials/twitter.svg').default.src },
                  { url: '', icon: require('assets/icons/socials/discord.svg').default.src },
                  { url: '', icon: require('assets/icons/socials/telegram.svg').default.src },
                  { url: '', icon: require('assets/icons/socials/youtube.svg').default.src },
                ].map((item, index) => (
                  <Button key={index} className='bg-green-500 w-[48px] px-0'>
                    <img src={item.icon} />
                  </Button>
                ))}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Toolbar className='bg-green-500'>
        <Container>
          <div className='font-bold text-white'>© My Meta Farm 2022</div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
