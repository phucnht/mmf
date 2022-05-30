import { AppBar, Container, Toolbar } from '@mui/material';

const Footer = () => {
  return (
    <AppBar component='footer' position='static' className='bg-green-500'>
      <Toolbar>
        <Container>
          <div className='font-bold text-white'>© My Meta Farm 2022</div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
