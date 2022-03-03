import { Box, Button, Heading, Stack, Text } from '@whammytechvn/wt-components';
import { MouseEventHandler } from 'react';

export interface ModalTypeCheckoutProps {
  decline: MouseEventHandler<HTMLButtonElement> | undefined;
}

const ModalTypeFailed = ({ decline }: ModalTypeCheckoutProps) => {
  return (
    <Stack className="p-24 rounded-[2rem] shadow-lg relative flex-col w-full bg-blue-500 outline-none focus:outline-none border-[3px] border-green-200 text-white text-2xl font-bold">
      <Box className="bg-[url('/assets/logos/failed.svg')] w-[9.1rem] h-[9.1rem] bg-auto bg-no-repeat bg-center" />
      <Heading className="!text-[4rem] font-bold uppercase text-red-a200 mt-8">FAILED!</Heading>
      <Box className="w-[35rem] text-center">
        <Text className="text-lg leading-relaxed my-12 text-red-a200">
          We’re so sorry but something went wrong when processing your request
        </Text>
        <Button onClick={decline} fullWidth color="primary" className="py-4 min-w-[15rem]">
          Close
        </Button>
      </Box>
    </Stack>
  );
};

export default ModalTypeFailed;
