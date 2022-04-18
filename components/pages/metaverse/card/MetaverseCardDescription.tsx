import { FC } from 'react';
import { Button, Text, Stack, Flex, Box } from '@whammytechvn/wt-components';

import imgMeteverseSmall from 'public/assets/metaverse/metaverse-sm.png';
import Countdown from 'components/countdown/Countdown';
import MetaverseCardButton from './MetaverseCardButton';
import Image from 'next/image';
import NextLink from 'next/link';
import Link from 'components/navigation/link/Link';

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
  const startDate = new Date(fromDate).getTime();
  const now = Date.now();

  const isEventNotAvailable = now > endDate || now < startDate;

  return (
    <Flex className="rounded-[2rem] bgg-black p-4 lg:p-8 lg:h-full min-h-min lg:min-h-[30rem] flex-col justify-between divide-y divide-white/50">
      <Flex className="flex-col w-full gap-2 lg:gap-3">
        <Countdown fromDate={fromDate} toDate={toDate} />
        <Flex className="items-center gap-6 lg:gap-12 relative lg:h-full min-h-[5rem] max-h-[8rem]">
          <Button compact content="Play To Earn" className="text-sm p-3 lg:p-4 min-w-max bgg-pink" />
          <Box className="relative h-[5rem] lg:h-full w-40 lg:w-60">
            <Image src={imgMeteverseSmall} alt="Metaverse" layout="fill" objectFit="cover" />
          </Box>
        </Flex>
        <Text className="text-sm lg:text-xl mb-8 text-justify min-h-min">{description}</Text>
      </Flex>
      <Stack className="flex-col w-full">
        <Text className="text-sm lg:text-xl text-yellow-100 my-5 w-full min-h-min">
          {condition}
          <br />
          <NextLink href="https://docs.google.com/spreadsheets/d/1ipcKKviZqua9PEHkDAQ1F06JSS03j93fjzAFYO7qGtY" passHref>
            <Link>
              <span className="text-white hover:opacity-90">Check whitelist here.</span>
            </Link>
          </NextLink>
        </Text>
        <MetaverseCardButton
          whitelistContract={whitelistContract}
          onchainId={onchainId}
          isEventNotAvailable={isEventNotAvailable}
        />
      </Stack>
    </Flex>
  );
};

export default MetaverseCardDescription;
