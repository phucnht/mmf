import { Tab } from '@headlessui/react';
import { Box, Flex } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import UserAvatar from 'components/user-avatar/UserAvatar';
import { NextPage } from 'next';
import Head from 'next/head';
import { FC } from 'react';

const CxTab: FC = ({ children }) => (
  <Tab
    className={({ selected }) => classNames('py-[1.6rem] px-[2.4rem] w-full text-left', selected ? 'bg-green-300' : '')}
  >
    {children}
  </Tab>
);

const CxTabPanel: FC = ({ children }) => <Tab.Panel>{children}</Tab.Panel>;

const Marketplace: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marketplace | My Metafarm</title>
        <meta name="description" content="Marketplace | My Metafarm" />
      </Head>
      <Tab.Group as={Flex} className="grid grid-cols-4 items-start justify-start w-full mt-8">
        <Box className="border-green-200 border-[3px] rounded-[2rem] pt-8 pb-48 bg-[url('/assets/marketplace/sidemenu-bottom.png')] bg-bottom bg-auto bg-no-repeat w-full">
          <UserAvatar className="mb-4" />
          <Tab.List className="text-white text-md flex flex-col items-start font-black">
            <CxTab>Inventory</CxTab>
            <CxTab>Account Settings</CxTab>
            <CxTab>History</CxTab>
            <CxTab>Wallet</CxTab>
            <CxTab>Upgrade</CxTab>
          </Tab.List>
        </Box>
        <Tab.Panels as={Box} className="col-span-3 w-full text-white text-sm border-[3px] border-red">
          <CxTabPanel>Inventory</CxTabPanel>
          <CxTabPanel>Account Settings</CxTabPanel>
          <CxTabPanel>History</CxTabPanel>
          <CxTabPanel>Wallet</CxTabPanel>
          <CxTabPanel>Upgrade</CxTabPanel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default Marketplace;
