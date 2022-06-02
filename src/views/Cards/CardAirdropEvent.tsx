import { Button, Grid, Paper } from '@mui/material';
import { CountdownTimer, NextImage, NextLink } from 'components';
import { AirdropEvent } from 'models/Airdrop';
import { publicRoute } from 'routes';

const CardAirdropEvent = ({ item }: { item: AirdropEvent }) => {
  return (
    <Paper className='p-10 rounded-[24px] shadow-md'>
      <Grid container spacing={5}>
        <Grid item md={5.5}>
          <div className='relative h-full'>
            <NextImage src={item.itemImage} layout='fill' objectFit='contain' />
          </div>
        </Grid>
        <Grid item md={6.5} className='flex flex-col items-start gap-3'>
          <div className='bg-info-light text-white font-black rounded-[8px] px-3 py-1'>{item.name}</div>
          <div className='font-black text-2xl text-info-dark'>AIRDROP EVENT</div>
          <CountdownTimer endTime={item.toDate} />

          <div className='font-semibold text-sm whitespace-pre-line'>{item.description}</div>
          <div className='font-bold text-orange-700'>{item.condition}</div>
          <div className='flex gap-6'>
            <Button color='secondary' className='w-40'>
              HOW TO JOIN
            </Button>
            {item.isStarted && (
              <NextLink href={publicRoute.metaverseEvent.url(item)}>
                <a>
                  <Button className='w-40'>RECEIVE NOW</Button>
                </a>
              </NextLink>
            )}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardAirdropEvent;
