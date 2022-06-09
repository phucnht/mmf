import { Button, Container } from '@mui/material';
import { styled } from '@mui/styles';
import { useTabs } from 'hooks';
import { DateTime } from 'luxon';
import { useQuery } from 'react-query';
import { marketService } from 'services';
import { TabEvents } from './components';

const ButtonCloud = styled(Button)({
  background: `url(${require('assets/components/tab_cloud.png').default.src})`,
  backgroundSize: 'cover',
  width: 210,
  height: 116,

  '@media (max-width: 800px)': {
    width: (210 * 2) / 3,
    height: (116 * 2) / 3,
    fontSize: '18px !important',
  },
});

const Metaverse = () => {
  const { data: events } = useQuery(['marketService.fetchAirdropEvents'], () =>
    marketService.fetchAirdropEvents().then((events) =>
      events.map((event) => ({
        ...event,
        isStarted: DateTime.fromISO(event.fromDate) < DateTime.now(),
        isFinished: DateTime.fromISO(event.toDate) < DateTime.now(),
      })),
    ),
  );

  const tabs = [
    {
      code: 'opening',
      label: 'OPENING',
      component: <TabEvents items={events?.filter((item) => item.isStarted && !item.isFinished)} />,
    },
    {
      code: 'upcoming',
      label: 'UPCOMING',
      component: <TabEvents items={events?.filter((item) => !item.isStarted && !item.isFinished)} />,
    },
  ];

  const [activeTab, onTabChange] = useTabs(tabs);

  return (
    <div style={{ background: 'linear-gradient(180deg, #C1F1FF 0%, #C1F1FF 30%, #C1F1FF00 100%)' }}>
      <Container className='pb-20'>
        <img src={require('assets/images/metaverse.gif').default.src} className='w-full' />
        <div className='flex justify-center gap-6 mt-20'>
          {tabs.map((tab) => (
            <ButtonCloud
              key={tab.code}
              variant='text'
              color='info'
              className='font-black text-2xl rounded-[100%]'
              style={{ opacity: activeTab === tab.code ? 1 : 0.6 }}
              onClick={(event) => onTabChange(event, tab.code)}
            >
              {tab.label}
            </ButtonCloud>
          ))}
        </div>
        {tabs.map((tab) => (
          <div key={tab.code} hidden={tab.code !== activeTab} className='mt-10'>
            {tab.component}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Metaverse;
