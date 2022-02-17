import { Stack, Text } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { MouseEventHandler } from 'react';
import { getCurrencyToken, getCurrencyUSD } from 'utils/format';
import CardCharacter from './CardCharacter';

export interface InventoryCharacterCardProps {
  item: {
    id: string;
    ownerId: string;
    name: string | undefined;
    rarity: string;
    imgSrc: StaticImageData | undefined;
    priceBNB: number;
    priceUSD: number;
  };
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function InventoryCharacterCard({ item, onClick }: InventoryCharacterCardProps) {
  const cxCardWrapper = classNames('flex flex-col text-white hover:opacity-90 transition w-full', {
    'cursor-pointer': onClick
  });

  return (
    <div className={cxCardWrapper} onClick={onClick}>
      <CardCharacter content={item.name} imgSrc={item.imgSrc} />
      <Stack className="flex-col text-2xl font-black mt-3">
        <Text>{getCurrencyToken(item.priceBNB)} BNB</Text>
        <Text>{getCurrencyUSD(item.priceUSD)}</Text>
      </Stack>
    </div>
  );
}
