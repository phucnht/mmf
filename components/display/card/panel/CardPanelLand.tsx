import { Stack, Text, Flex, Box } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import CardTitleBanner from 'components/display/card/title/CardTitleBanner';
import Image from 'components/display/image/Image';
import { IconStarList } from 'components/icon/IconStar';
import { MouseEventHandler } from 'react';
import { NftSaleItemDto } from 'store/market/nft-item/nftItem.i';
import { getCurrencyToken, getCurrencyUSD } from 'utils/format';
import imgLand from '/public/assets/items/lands/land-1.png';

import _random from 'lodash/random';
import _sample from 'lodash/sample';

export const MOCK_LAND = {
  id: '#257578245',
  stars: _random(1, 3),
  element: 'Thunder',
  name: 'Kythira',
  rarity: _sample(['blue', 'green', 'pink', 'yellow']),
  breedCount: 3,
  imgSrc: imgLand,
  priceBNB: 11356,
  priceUSD: 1127
};

export interface CardPanelLandProps {
  item: NftSaleItemDto;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function CardPanelLand({ item, onClick }: CardPanelLandProps) {
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
          <IconStarList count={3} withBg />
          <Text className="text-md">Breed count: {3}</Text>
        </Flex>
        <Box className="h-[28.8rem] m-auto">
          <Image alt={item.name} src={imgLand} />
        </Box>
        <Stack className="w-full flex-col items-center">
          <CardTitleBanner content={item.name} className="w-full" />
          <Stack className="flex-col text-2xl font-black mt-2 w-full">
            <Text>{getCurrencyToken(item.price)} BNB</Text>
            <Text>{getCurrencyUSD(item.price)}</Text>
          </Stack>
        </Stack>
      </Flex>
    </div>
  );
}
