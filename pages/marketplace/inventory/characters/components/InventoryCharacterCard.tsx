import { Stack, Text, Flex } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { MouseEventHandler } from 'react';
import { getCurrencyToken, getCurrencyUSD } from 'utils/format';
import CardTitleBanner from './CardCharacter';

export interface InventoryCharacterCardProps {
  item: {
    id: string;
    name: string | undefined;
    rarity: string;
    imgSrc: StaticImageData | undefined;
    priceBNB: number;
    priceUSD: number;
  };
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function InventoryCharacterCard({ item, onClick }: InventoryCharacterCardProps) {
  const cxCardWrapper = classNames('flex flex-col text-white', { 'cursor-pointer': onClick });
  const cxWrapper = classNames('flex-col items-center justify-between items-start p-2 rounded-[2rem] h-[50rem] w-full');

  return (
    <div className={cxCardWrapper} onClick={onClick}>
      <Flex className={cxWrapper}>
        <CardTitleBanner content={item.name} imgSrc={item.imgSrc} />
        <Stack className="flex-col text-2xl font-black mt-2">
          <Text>{getCurrencyToken(item.priceBNB)} BNB</Text>
          <Text>{getCurrencyUSD(item.priceUSD)}</Text>
        </Stack>
      </Flex>
    </div>
  );
}
