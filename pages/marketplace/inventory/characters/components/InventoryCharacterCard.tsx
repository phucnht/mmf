import { Stack, Text, Flex } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import Image from 'components/display/image/Image';
import { getCurrencyToken, getCurrencyUSD } from 'utils/format';
import CardTitleBanner from './CardTitleBanner';

export interface InventoryCharacterCardProps {
  item: {
    id: string;
    name: string;
    rarity: string;
    imgSrc: StaticImageData | undefined;
    priceBNB: number;
    priceUSD: number;
  };
}

export default function InventoryCharacterCard({ item }: InventoryCharacterCardProps) {
  const cxWrapper = classNames('flex-col justify-between items-start p-2 rounded-[2rem] border-[5px] h-[36rem]', {
    // 'border-pink-100': item.rarity === 'pink'
  });

  return (
    <Stack className="flex flex-col text-white">
      <CardTitleBanner imgSrc={item.imgSrc} imgAlt={item.name} />
      <Stack className="flex-col text-2xl font-black mt-2">
        <Text>{getCurrencyToken(item.priceBNB)} BNB</Text>
        <Text>{getCurrencyUSD(item.priceUSD)}</Text>
      </Stack>
    </Stack>
  );
}
