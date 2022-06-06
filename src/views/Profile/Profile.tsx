import { Avatar, CardMedia, Container, Tab, Tabs } from '@mui/material';
import { web3 } from 'contracts';
import { useTabs } from 'hooks';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profileSlice';
import { shorten } from 'utils/common';
import { TabInventory, TabListing } from './components';

const Profile = () => {
  const router = useRouter();
  const profile = useSelector(profileSelector);
  const address = (router.query.address || profile.address) as string;

  if (!web3.utils.isAddress(address)) {
    router.replace('/');
  }

  const tabs = [
    { code: 'owned', label: 'Owned', component: <TabInventory /> },
    { code: 'listing', label: 'Listing', component: <TabListing /> },
  ];

  const [activeTab, onTabChange] = useTabs(tabs);

  return (
    <Container>
      <CardMedia
        image={require('assets/images/profile-cover.png').default.src}
        className='md:h-[320px] h-[180px] rounded-xl'
      >
        <div></div>
      </CardMedia>
      <div className='md:-mt-[80px] -mt-[60px] pb-20'>
        <div className='flex flex-col items-center gap-2 mb-10'>
          <Avatar
            src={require('assets/images/profile-avatar.png').default.src}
            className='md:w-[120px] md:h-[120px] w-[100px] h-[100px] bg-red-100 border-2'
          />
          <div className='font-semibold text-sm text-neutral-400'>{shorten(address)}</div>
        </div>

        <Tabs
          value={activeTab}
          onChange={onTabChange}
          textColor='inherit'
          classes={{ flexContainer: 'justify-center border-b' }}
        >
          {tabs.map((tab) => (
            <Tab key={tab.code} label={tab.label} value={tab.code} />
          ))}
        </Tabs>
        {tabs.map((tab) => (
          <div key={tab.code} hidden={tab.code !== activeTab} className='py-10'>
            {tab.component}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Profile;
