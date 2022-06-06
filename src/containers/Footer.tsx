import { AppBar, Button, Container, Grid, TextField, Toolbar } from '@mui/material';

const Footer = () => {
  return (
    <AppBar component='footer' position='static' elevation={0} color='transparent' className='relative z-[1]'>
      <div
        className='absolute bottom-0 left-0 right-0 -z-10 h-[600px]'
        style={{
          background: `url(${require('assets/images/metaverse-footer.png').default.src}) no-repeat bottom / contain`,
        }}
      />
      <Container maxWidth='md' className='py-[160px]'>
        <Grid container spacing={4}>
          <Grid item lg={7} className='flex flex-col items-start gap-3'>
            <div className='font-black'>STAY IN THE LOOP</div>
            <div className='text-sm'>
              Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks
              for navigating My Meta Farm.
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
      <Toolbar className='bg-green-500'>
        <Container>
          <div className='font-bold text-white'>© My Meta Farm 2022</div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
