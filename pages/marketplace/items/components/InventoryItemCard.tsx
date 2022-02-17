import { Stack, Text, Flex } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import Image from 'components/display/image/Image';
import { IconStar } from 'components/icon/IconStar';
import { MouseEventHandler } from 'react';
import { getCurrencyToken, getCurrencyUSD } from 'utils/format';

export interface InventoryItemCardProps {
  item: {
    id: string;
    stars: number;
    element: string;
    name: string;
    rarity: string | undefined;
    breedCount: number;
    imgSrc: StaticImageData | undefined;
    priceBNB: number;
    priceUSD: number;
  };
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function InventoryItemCard({ item, onClick }: InventoryItemCardProps) {
  const cxCardWrapper = classNames('flex flex-col text-white hover:opacity-90 transition', {
    'cursor-pointer': onClick
  });
  const cxId = classNames('text-xs font-black py-2 px-5 rounded-[2rem]', {
    'bg-blue-300': item.rarity === 'blue',
    'bg-green-500': item.rarity === 'green',
    'bg-pink-200': item.rarity === 'pink',
    'bg-yellow-300': item.rarity === 'yellow'
  });
  const cxWrapper = classNames('flex-col justify-between items-start p-2 rounded-[2rem] border-[5px] h-[36rem]', {
    'border-blue-300': item.rarity === 'blue',
    'border-green-500': item.rarity === 'green',
    'border-pink-200': item.rarity === 'pink',
    'border-yellow-300': item.rarity === 'yellow'
  });

  return (
    <div className={cxCardWrapper} onClick={onClick}>
      <Flex className={cxWrapper}>
        <Stack className="flex-col gap-2">
          <Text className={cxId}>{item.id}</Text>
          <Flex className="justify-center items-end gap-2">
            <IconStar />
            <Text className="text-md font-black">{item.element}</Text>
          </Flex>
          <Text>Breed count: {item.breedCount}</Text>
        </Stack>
        <Image alt={item.name} src={item.imgSrc} />
      </Flex>
      <Stack className="flex-col text-2xl font-black mt-2">
        <Text>{getCurrencyToken(item.priceBNB)} BNB</Text>
        <Text>{getCurrencyUSD(item.priceUSD)}</Text>
      </Stack>
    </div>
  );
}