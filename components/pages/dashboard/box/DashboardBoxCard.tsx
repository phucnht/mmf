import { Stack, Flex, Box, Button, Text } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import CardTitleBanner from 'components/display/card/title/CardTitleBanner';
import Image from 'components/display/image/Image';
import { MouseEventHandler } from 'react';
import { BoxDto } from 'store/box/box.i';

import imgBox1 from 'public/assets/items/box/box-1.png';

export interface DashboardBoxCardProps {
  item: BoxDto;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function DashboardBoxCard({ item, onClick }: DashboardBoxCardProps) {
  const cxCardWrapper = classNames('flex flex-col text-white hover:opacity-90 transition', {
    'cursor-pointer': onClick
  });
  const cxWrapper = classNames('flex-col items-center justify-between py-8 px-6 rounded-[2rem] bg-blue-400 h-[51rem]');

  return (
    <div className={cxCardWrapper} onClick={onClick}>
      <Flex className={cxWrapper}>
        <Box className="m-auto relative w-full h-[25rem]">
          <Image alt={item.id} src={imgBox1} layout="fill" objectFit="contain" />
        </Box>
        <Stack className="w-full flex-col items-center gap-2 mt-4">
          <CardTitleBanner content={`Meta Box`} className="w-full" />
          <Text className="text-[#6DA900] text-[3.2rem] font-black">This event is happening</Text>
          <Button fullWidth color="secondary" content="Buy Now" className="py-6 text-red-100 text-xl" />
        </Stack>
      </Flex>
    </div>
  );
}
