import { Container } from '@mui/material';
import { CountdownTimer } from 'components';
import { AirdropEvent } from 'models/Airdrop';
import { CardAirdropItem } from 'views/Cards';

const MetaverseEvent = ({ item: event }: { item: AirdropEvent }) => {
  return (
    <div style={{ background: 'linear-gradient(180deg, #C1F1FF 0%, #C1F1FF 30%, #C1F1FF00 100%)' }}>
      <Container className='py-20'>
        <Container maxWidth='sm' className='flex flex-col items-center gap-3 text-center mb-10'>
          <div className='font-black text-2xl text-info-dark'>{event.name}</div>
          <CountdownTimer endTime={event.toDate} />
          <div className='font-semibold text-sm whitespace-pre-line'>{event.description}</div>
        </Container>

        <Container maxWidth='lg' className='flex flex-col gap-10'>
          {event.events.map((item) => (
            <CardAirdropItem key={item.id} item={item} event={event} />
          ))}
        </Container>
      </Container>
    </div>
  );
};

export default MetaverseEvent;
