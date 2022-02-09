import { useState } from 'react';
import { Box, Button, Flex, Heading, Text } from '@whammytechvn/wt-components';
import Divider from 'components/display/divider/Divider';
import { InputField } from 'components/input/InputField';
import { getLayoutMarketplaceOffset } from 'components/layouts/pages/getLayoutMarketplace';
import FormChangeName from 'components/forms/FormChangeName';
import Head from 'next/head';
import { NextPageWithLayout } from 'pages/_app';
import useModalConfirmation from 'hooks/useModal';

const MarketplaceAccount: NextPageWithLayout = () => {
  const [userCreated] = useState(false);

  // Modal confirmation
  const { open } = useModalConfirmation();
  const handleOpenDialogCreateGameProfile = async () => {
    await open({ type: 'createGameProfile', size: 'md' });
  };

  return (
    <>
      <Head>
        <title>Account | My Metafarm</title>
        <meta name="description" content="Account | My Metafarm" />
      </Head>
      <Box className="border-green-200 border-[3px] rounded-[2rem] w-full p-28 pr-48">
        <Heading as="h1" className="text-2xl font-extrabold">
          Account Settings
        </Heading>
        <Divider className="mt-10" />
        <Box className="w-2/3">
          <Box className="mt-12">
            <Heading as="h2" className="!text-xl font-bold uppercase mb-8">
              General Settings
            </Heading>
            <FormChangeName />
          </Box>
          <Box className="mt-12">
            <Heading as="h2" className="!text-xl font-bold uppercase mb-8">
              Game Profile
            </Heading>
            {userCreated ? (
              <InputField
                inputProps={{ className: '!w-full' }}
                name="email"
                type="email"
                label="Email Address"
                value="Anthony93@gmail.com"
              />
            ) : (
              <Flex className="flex-col justify-start items-start">
                <span className="text-md text-white">You need to create a game account to play the game</span>
                <Button className="!bg-blue-300 py-6 px-20 mt-12" onClick={handleOpenDialogCreateGameProfile}>
                  <Text className="font-normal capitalize">Create Account</Text>
                </Button>
              </Flex>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

MarketplaceAccount.getLayout = getLayoutMarketplaceOffset;

export default MarketplaceAccount;
