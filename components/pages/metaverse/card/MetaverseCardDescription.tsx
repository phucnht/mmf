import { FC } from 'react';
import { Button, Text, Stack, Flex } from '@whammytechvn/wt-components';

import imgMeteverseSmall from 'public/assets/metaverse/metaverse-sm.png';
import Countdown from 'components/countdown/Countdown';
import MetaverseCardButton from './MetaverseCardButton';
import Image from 'next/image';

export interface MetaverseCardDescriptionProps {
  description: string;
  condition: string;
  whitelistContract: string;
  onchainId: string;
  fromDate: Date;
  toDate: Date;
}

const MetaverseCardDescription: FC<MetaverseCardDescriptionProps> = ({
  description,
  condition,
  whitelistContract,
  onchainId,
  fromDate,
  toDate
}) => {
  const endDate = new Date(toDate).getTime();
  const now = Date.now();

  const isEventEnded = now > endDate;

  return (
    <Flex className="rounded-[2rem] bgg-black p-4 lg:p-8 h-full min-h-[30rem] flex-col justify-between divide-y divide-white/50">
      <Flex className="flex-col w-full gap-2 lg:gap-3">
        <Countdown fromDate={fromDate} toDate={toDate} />
        <Flex className="items-center gap-6 lg:gap-12 relative h-full min-h-[5rem] max-h-[8rem]">
          <Button compact content="Play To Earn" className="text-sm p-3 lg:p-4 min-w-max bgg-pink" />
          <div className="relative h-[5rem] lg:h-full w-40 lg:w-60">
            <Image src={imgMeteverseSmall} alt="Metaverse" layout="fill" />
          </div>
        </Flex>
        <Text className="text-sm lg:text-xl uppercase">{description}</Text>
      </Flex>
      <Stack className="flex-col w-full">
        <Text className="text-sm lg:text-xl text-yellow-100 my-5 w-full">{condition}</Text>
        <MetaverseCardButton whitelistContract={whitelistContract} onchainId={onchainId} isEventEnded={isEventEnded} />
      </Stack>
    </Flex>
  );
};

export default MetaverseCardDescription;
