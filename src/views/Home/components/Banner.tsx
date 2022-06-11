import { CardMedia } from '@mui/material';

const Banner = () => {
  return (
    <CardMedia component='video' src={require('../assets/videos/trailer-web.mp4')} autoPlay loop muted controls={false}>
      <div></div>
    </CardMedia>
  );
};

export default Banner;
