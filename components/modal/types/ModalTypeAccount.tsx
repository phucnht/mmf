import { Button, Stack, Text } from '@whammytechvn/wt-components';
import { MouseEventHandler } from 'react';

export interface ModalTypeAccountProps {
  decline: MouseEventHandler<HTMLButtonElement> | undefined;
}

const ModalTypeAccount = ({ decline }: ModalTypeAccountProps) => {
  return (
    <Stack className="p-8 lg:p-24 rounded-[2rem] shadow-lg relative flex-col w-full bg-blue-500 outline-none focus:outline-none border-[3px] border-green-200 text-white text-2xl font-bold">
      <Text className="text-sm lg:text-lg leading-relaxed my-12 text-center">
        Please create an account and fully update your profile to receive this reward
      </Text>
      <Stack className="items-center w-5/6">
        <Button onClick={decline} fullWidth color="secondary" className="text-red-100 py-2 text-sm lg:text-md">
          I GOT IT
        </Button>
      </Stack>
    </Stack>
  );
};

export default ModalTypeAccount;
