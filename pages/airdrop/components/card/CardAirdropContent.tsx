import Image from 'next/image';
import { FC } from 'react';
import { Box, Button, Text, Stack } from '@whammytechvn/wt-components';

import imgMeteverseSmall from 'public/assets/airdrop/metaverse-sm.png';
import useModalConfirmation from 'hooks/useModal';

export interface CardAirdropContentProps {
  content: string;
  conditions: string;
}

const CardAirdropContent: FC<CardAirdropContentProps> = ({ content, conditions }) => {
  // Modal confirmation
  const { open } = useModalConfirmation();
  const handleOpenDialog = async () => {
    await open({ type: 'account' });
  };

  return (
    <Stack className="rounded-[2rem] bgg-black p-8 h-full flex-col divide-y divide-white/50">
      <Box className="grow">
        <Stack className="gap-12 mb-6">
          <Button compact content="Play To Earn" className="text-sm p-4 min-w-max bgg-pink" />
          <Image src={imgMeteverseSmall} alt="Metaverse" />
        </Stack>
        <Text className="uppercase">{content}</Text>
      </Box>
      <Stack className="flex-col">
        <Text className="text-yellow-100 my-5">{conditions}</Text>
        <Button color="primary" content="I want to receive it" fullWidth className="py-5" onClick={handleOpenDialog} />
      </Stack>
    </Stack>
  );
};

export default CardAirdropContent;
