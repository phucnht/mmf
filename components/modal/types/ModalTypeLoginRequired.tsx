import { Box, Button, Heading, Stack, Text } from '@whammytechvn/wt-components';
import { MouseEventHandler } from 'react';
import { connect } from 'store/account/auth/auth.api';

export interface ModalTypeAccountProps {
  decline: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function ModalTypeLoginRequired({ decline }: ModalTypeAccountProps) {
  return (
    <Stack className="p-24 rounded-[2rem] shadow-lg relative flex-col w-full bg-blue-500 outline-none focus:outline-none border-[3px] border-green-200 text-white text-2xl font-bold">
      <Box className="bg-[url('/assets/logos/login.svg')] w-[9.1rem] h-[9.1rem] bg-auto bg-no-repeat bg-center" />
      <Heading className="!text-[4rem] font-bold uppercase">LOGIN WITH META MASK</Heading>
      <Box className="w-[35rem] text-center">
        <Text className="text-lg leading-relaxed my-12">
          Connect with your available wallet or create new wallet to continue
        </Text>
        <Stack className="items-center w-5/6 gap-8">
          <Button
            onClick={() => connect()}
            fullWidth
            color="secondary"
            className="text-red-100 py-4 w-fit min-w-[15rem] disabled:bg-grey-400 disabled:cursor-not-allowed disabled:pointer-events-none"
          >
            Connect Now
          </Button>
          <Button onClick={decline} fullWidth color="primary" className="py-4 min-w-[15rem] w-fit">
            Later
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
