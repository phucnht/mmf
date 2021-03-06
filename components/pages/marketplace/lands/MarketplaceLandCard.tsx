import { Stack, Text, Flex, Box } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import CardTitleBanner from 'components/display/card/CardTitleBanner';
import Image from 'components/display/image/Image';
import { IconStarList } from 'components/icon/IconStar';
import { MouseEventHandler } from 'react';
import { getCurrencyToken, getCurrencyUSD } from 'utils/format';

export interface MarketplaceLandCardProps {
  item: {
    id: string;
    name: string;
    stars: number;
    breedCount: number;
    imgSrc: StaticImageData | undefined;
    priceBNB: number;
    priceUSD: number;
  };
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function MarketplaceLandCard({ item, onClick }: MarketplaceLandCardProps) {
  const cxCardWrapper = classNames('flex flex-col text-white hover:opacity-90 transition', {
    'cursor-pointer': onClick
  });
  const cxWrapper = classNames(
    'relative flex-col justify-between items-start p-4 rounded-[2rem] bg-blue-400 h-[48rem]'
  );

  return (
    <div className={cxCardWrapper} onClick={onClick}>
      <Flex className={cxWrapper}>
        <Flex className="absolute flex-col items-start gap-2">
          <IconStarList count={item.stars} withBg />
          <Text className="text-md">Breed count: {item.breedCount}</Text>
        </Flex>
        <Box className="h-[28.8rem] m-auto">
          <Image alt={item.name} src={item.imgSrc} />
        </Box>
        <Stack className="w-full flex-col items-center">
          <CardTitleBanner content={item.name} className="w-full" />
          <Stack className="flex-col text-2xl font-black mt-2 w-full">
            <Text>{getCurrencyToken(item.priceBNB)} BNB</Text>
            <Text>{getCurrencyUSD(item.priceUSD)}</Text>
          </Stack>
        </Stack>
      </Flex>
    </div>
  );
}
