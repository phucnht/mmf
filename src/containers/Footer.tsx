import { AppBar, Button, Container, Grid, TextField, Toolbar } from '@mui/material';

const Footer = () => {
  return (
    <AppBar component='footer' position='static' elevation={0} color='transparent' className='relative z-[1]'>
      <div
        style={{ background: `url(${require('assets/images/footer-background.png').default.src}) no-repeat bottom` }}
        className='flex items-end md:h-[720px] h-[320px] bg-cover overflow-hidden'
      >
        <Container maxWidth='md' className='relative md:py-[160px] py-[40px]'>
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
            <Grid item md={6.5} className='flex flex-col items-start gap-3'>
              <div className='font-black'>STAY IN THE LOOP</div>
              <div className='text-sm'>
                Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and
                tricks for navigating My Meta Farm.
              </div>
              <div className='flex gap-3'>
                <TextField placeholder='Enter your email' InputProps={{ className: 'bg-white text-black' }} />
                <Button>Subscribe</Button>
              </div>
            </Grid>
            <Grid item md={5.5} className='flex flex-col items-start gap-3'>
              <div className='font-black'>JOIN OUR COMMUNITY</div>
              <div className='flex flex-wrap gap-3'>
                {[
                  {
                    url: 'https://www.facebook.com/MyMetaFarmOfficial',
                    icon: require('assets/icons/socials/facebook.svg').default.src,
                  },
                  {
                    url: 'https://instagram.com/MyMetaFarmOfficial',
                    icon: require('assets/icons/socials/instagram.svg').default.src,
                  },
                  {
                    url: 'https://twitter.com/MyMetaFarm',
                    icon: require('assets/icons/socials/twitter.svg').default.src,
                  },
                  {
                    url: 'https://discord.gg/MyMetaFarm',
                    icon: require('assets/icons/socials/discord.svg').default.src,
                  },
                  {
                    url: 'https://t.me/MyMetaFarm',
                    icon: require('assets/icons/socials/telegram.svg').default.src,
                  },
                  {
                    url: 'https://www.youtube.com/channel/UCQ_NUT5gSaYfEDq61YbhDlA',
                    icon: require('assets/icons/socials/youtube.svg').default.src,
                  },
                ].map((item, index) => (
                  <a key={index} href={item.url} target='_blank' rel='noreferrer'>
                    <Button className='bg-green-500 hover:opacity-80 w-[48px] h-[48px] px-0'>
                      <img src={item.icon} />
                    </Button>
                  </a>
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
