import { Stack, Text, Flex, Box } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import Image from 'components/display/image/Image';
import { IconStarList } from 'components/icon/IconStar';
import { MouseEventHandler } from 'react';
import { getCurrencyToken, getCurrencyUSD } from 'utils/format';

import _random from 'lodash/random';
import _sample from 'lodash/sample';

import imgPants from 'public/assets/items/items/pants.png';
import imgHair from 'public/assets/items/items/hair.png';
import imgClothes from 'public/assets/items/items/clothes.png';
import imgBoots from 'public/assets/items/items/boots.png';
import { NftSaleItemDto } from 'store/market/nft-item/nftItem.i';
import { useAppSelector } from 'store/store.hook';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';

export const MOCK_ITEM = {
  id: '#257578245',
  stars: _random(1, 3),
  element: 'Thunder',
  name: 'Item',
  rarity: _sample(['blue', 'green', 'pink', 'yellow']),
  breedCount: 3,
  imgSrc: _sample([imgPants, imgHair, imgClothes, imgBoots]),
  priceBNB: 11356,
  priceUSD: 1127
};

export interface CardPanelItemProps {
  item: NftSaleItemDto;
  exchange: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function CardPanelItem({ item, exchange, onClick }: CardPanelItemProps) {
  const { BUSD } = useAppSelector(selectPaymentTokenData);

  const cxCardWrapper = classNames('flex flex-col text-white hover:opacity-90 transition', {
    'cursor-pointer': onClick
  });
  const cxId = classNames('bg-blue-300 text-xs font-black py-2 px-5 rounded-[2rem] flex items-center', {
    // 'bg-blue-300': item.rarity === 'blue',
    // 'bg-green-500': item.rarity === 'green',
    // 'bg-pink-200': item.rarity === 'pink',
    // 'bg-yellow-300': item.rarity === 'yellow'
  });
  const cxWrapper = classNames(
    'border-blue-300 flex-col justify-between items-start p-2 rounded-[2rem] border-[5px] h-[36rem]',
    {
      // 'border-blue-300': item.rarity === 'blue',
      // 'border-green-500': item.rarity === 'green',
      // 'border-pink-200': item.rarity === 'pink',
      // 'border-yellow-300': item.rarity === 'yellow'
    }
  );

  return (
    <div className={cxCardWrapper} onClick={onClick}>
      <Flex className={cxWrapper}>
        <Flex className="flex-col items-start gap-2">
          <Text className={cxId}>#{item.tokenId}</Text>
          <Flex className="justify-center items-end gap-2">
            <IconStarList count={3} className="mt-2" />
            <Text className="text-md font-black">{item.name}</Text>
          </Flex>
          <Text>
            Breed count: <b>{3}</b> | Amount: <b>{item.amount}</b>
          </Text>
        </Flex>
        <Box className="relative w-full h-full mt-4">
          <Image alt={item.name} src="/assets/img-video/item.png" layout="fill" objectFit="contains" />
        </Box>
      </Flex>
      <Stack className="flex-col text-2xl font-black mt-2">
        <Text>
          {getCurrencyToken(item.price)} {BUSD.symbol}
        </Text>
        <Text>{getCurrencyUSD(item.price * +exchange)}</Text>
      </Stack>
    </div>
  );
}
