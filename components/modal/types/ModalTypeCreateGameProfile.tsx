import { Flex, Heading, Stack, Text } from '@whammytechvn/wt-components';
import FormCreateGameProfile from 'components/forms/FormCreateGameProfile';
import { MouseEventHandler } from 'react';

export interface ModalTypeCreateGameProfileProps {
  decline: MouseEventHandler<HTMLButtonElement> | undefined;
}

const ModalTypeCreateGameProfile = () => {
  return (
    <Stack className="p-24 rounded-[2rem] shadow-lg relative flex-col w-full bg-blue-500 outline-none focus:outline-none border-[3px] border-green-200 text-white text-center">
      <Flex className="flex-col max-w-3xl">
        <Heading className="text-2xl uppercase mb-8">Create Game Profile</Heading>
        <FormCreateGameProfile />
        <Text className="text-sm font-extrabold mt-8">
          By continuing, you agree to <span className="font-bold">My Meta Farm Terms of Service</span> and confirm that
          you have read <span className="font-bold">My Meta Farm Privacy Policy</span>.
        </Text>
      </Flex>
    </Stack>
  );
};

export default ModalTypeCreateGameProfile;
