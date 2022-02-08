import { Heading, Stack, Text } from '@whammytechvn/wt-components';
import FormCreateGameProfile from 'forms/FormCreateGameProfile';
import { MouseEventHandler } from 'react';

export interface ModalTypeCreateGameProfileProps {
  decline: MouseEventHandler<HTMLButtonElement> | undefined;
}

const ModalTypeCreateGameProfile = ({ decline }: ModalTypeCreateGameProfileProps) => {
  return (
    <Stack className="p-24 rounded-[2rem] shadow-lg relative flex-col w-full bg-blue-500 outline-none focus:outline-none border-[3px] border-green-200 text-white text-center">
      <Heading className="text-2xl uppercase">Create Game Profile</Heading>
      {/* <FormCreateGameProfile /> */}
      <Text className="text-sm">
        By continuing, you agree to <span className="font-bold">My Meta Farm Terms of Service</span> and confirm that
        you have read <span className="font-bold">My Meta Farm Privacy Policy</span>.
      </Text>
    </Stack>
  );
};

export default ModalTypeCreateGameProfile;
