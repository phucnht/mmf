import { ArrowBack } from '@mui/icons-material';
import { Button, Container } from '@mui/material';
import { CountdownTimer, NextLink } from 'components';
import { AirdropEvent } from 'models/Airdrop';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { publicRoute } from 'routes';
import { marketService } from 'services';
import { CardAirdropItem } from 'views/Cards';

const MetaverseEvent = () => {
  const { query } = useRouter();

  const { data: event, isSuccess } = useQuery(['marketService.getAirdropEventById', { id: query.id }], () =>
    marketService.getAirdropEventById({ id: query.id as string }),
  ) as { data: AirdropEvent; isSuccess: boolean };

  if (!isSuccess) return <></>;
  return (
    <div style={{ background: 'linear-gradient(180deg, #C1F1FF 0%, #C1F1FF 30%, #C1F1FF00 100%)' }}>
      <Container className='py-20'>
        <div>
          <NextLink href={publicRoute.metaverse.path}>
            <a>
              <Button variant='text' color='inherit' startIcon={<ArrowBack />}>
                Back
              </Button>
            </a>
          </NextLink>
        </div>

        <Container maxWidth='sm' className='flex flex-col items-center gap-3 text-center mb-10'>
          <div className='font-black text-2xl text-info-dark'>{event.name}</div>
          <CountdownTimer endTime={event.toDate} />
          <div className='font-semibold text-sm whitespace-pre-line'>{event.description}</div>
        </Container>

        <Container maxWidth='lg' className='flex flex-col gap-10 px-0'>
          {event.events.map((item) => (
            <CardAirdropItem key={item.id} item={item} event={event} />
          ))}
        </Container>
      </Container>
    </div>
  );
};

export default MetaverseEvent;
