import { Stack, Text, Flex, Box, Button } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { Badge } from 'components/display/badge/Badge';
import CardTitleBanner from 'components/display/card/CardTitleBanner';
import Image from 'components/display/image/Image';
import { IconStarRounded } from 'components/icon/IconStar';
import { MouseEventHandler } from 'react';
import { getCurrencyToken, getCurrencyUSD } from 'utils/format';

export interface InventoryBoxCardProps {
  item: {
    id: string;
    name: string;
    breedCount: number;
    imgSrc: StaticImageData | undefined;
    priceBNB: number;
    priceUSD: number;
  };
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function InventoryBoxCard({ item, onClick }: InventoryBoxCardProps) {
  const cxCardWrapper = classNames('flex flex-col text-white', { 'cursor-pointer': onClick });
  const cxWrapper = classNames('flex-col items-center justify-between py-8 px-12 rounded-[2rem] bg-blue-400 h-[66rem]');

  return (
    <div className={cxCardWrapper} onClick={onClick}>
      <Flex className={cxWrapper}>
        <Badge content="05" />
        <Box className="h-[41rem] m-auto">
          <Image alt={item.name} src={item.imgSrc} />
        </Box>
        <Stack className="w-full flex-col items-center gap-4">
          <CardTitleBanner content={item.name} className="w-full" />
          <Button fullWidth color="secondary" content="Open Box" className="py-6 text-red-100 text-xl" />
        </Stack>
      </Flex>
    </div>
  );
}
