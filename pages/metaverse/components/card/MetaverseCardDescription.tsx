import Image from 'components/display/image/Image';
import { FC } from 'react';
import { Box, Button, Text, Stack } from '@whammytechvn/wt-components';

import imgMeteverseSmall from 'public/assets/metaverse/metaverse-sm.png';
import Countdown from 'components/countdown/Countdown';
import AirdropCardButton from './MetaverseCardButton';

export interface MetaverseCardDescriptionProps {
  description: string;
  condition: string;
  whitelistContract: string;
  fromDate: Date;
  toDate: Date;
}

const MetaverseCardDescription: FC<MetaverseCardDescriptionProps> = ({
  description,
  condition,
  whitelistContract,
  fromDate,
  toDate
}) => {
  return (
    <Stack className="rounded-[2rem] bgg-black p-8 h-full flex-col divide-y divide-white/50">
      <Box className="w-full grow">
        <Countdown fromDate={fromDate} toDate={toDate} className="mb-6" />
        <Stack className="gap-12 mb-6">
          <Button compact content="Play To Earn" className="text-sm p-4 min-w-max bgg-pink" />
          <Image src={imgMeteverseSmall} alt="Metaverse" />
        </Stack>
        <Text className="uppercase">{description}</Text>
      </Box>
      <Stack className="flex-col w-full">
        <Text className="text-yellow-100 my-5 w-full">{condition}</Text>
        <AirdropCardButton whitelistContract={whitelistContract} />
      </Stack>
    </Stack>
  );
};

export default MetaverseCardDescription;
