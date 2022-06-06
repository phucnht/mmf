import { Container } from '@mui/material';
import { NextImage } from 'components';
import { AirdropEvent } from 'models/Airdrop';
import { CardAirdropEvent } from 'views/Cards';

const TabEvents = ({ items }: { items?: AirdropEvent[] }) => {
  return (
    <Container maxWidth='lg' className='flex flex-col gap-10 px-0'>
      {items ? (
        items.length > 0 ? (
          items.map((item) => <CardAirdropEvent key={item.id} item={item} />)
        ) : (
          <div className='text-center'>
            <NextImage src={require('assets/images/airdrop-events-empty.png').default.src} width={390} height={280} />
            <div className='font-black text-2xl text-info-dark mb-3'>AIRDROP IS COMING!</div>
            <div className='font-semibold text-sm'>
              {"Don't miss out! We are preparing for better airdrop events for citizens."}
              <br />
              {'Follow our news and keep an eye out for your super cool NFTs!'}
            </div>
          </div>
        )
      ) : null}
    </Container>
  );
};

export default TabEvents;
