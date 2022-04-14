import classNames from 'classnames';
import CustomImage, { externaImageLoader } from 'components/display/image/CustomImage';
import { MouseEventHandler } from 'react';
import { Box, Flex, Text } from '@whammytechvn/wt-components';
import { NftItemDto } from 'store/market/nft-item/nftItem.i';
import clsxm from 'utils/clsxm';

const RARITY_COLOR = {
  COMMON: 'Common',
  RARE: 'Rare',
  EPIC: 'Epic',
  LEGENDARY: 'Legendary',
  UNIQUE: 'Unique'
};

export interface InventoryAirdropCardProps {
  item: NftItemDto;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function InventoryAirdropCard({ item, onClick }: InventoryAirdropCardProps) {
  const [isCommon, isRare, isEpic, isLegendary, isUnique] = [
    item.external?.rarity === RARITY_COLOR.COMMON,
    item.external?.rarity === RARITY_COLOR.RARE,
    item.external?.rarity === RARITY_COLOR.EPIC,
    item.external?.rarity === RARITY_COLOR.LEGENDARY,
    item.external?.rarity === RARITY_COLOR.UNIQUE
  ];
  const cxCardWrapper = classNames('flex flex-col text-white hover:opacity-90 transition', {
    'cursor-pointer': onClick
  });
  const cxWrapper = clsxm(`flex-col justify-between items-start p-2 rounded-[2rem] border-[5px] h-[36rem] gap-4`, {
    'border-gray-400': isCommon,
    'border-blue-300': isRare,
    'border-purple-400': isEpic,
    'border-orange-400': isLegendary,
    'border-red-400': isUnique
  });
  const cxId = classNames(`text-xs font-black py-2 px-5 rounded-[2rem] flex items-center justify-center`, {
    'bg-gray-400': isCommon,
    'bg-blue-300': isRare,
    'bg-purple-400': isEpic,
    'bg-orange-400': isLegendary,
    'bg-red-400': isUnique
  });
  const cxRarity = classNames(`text-xs uppercase py-2 px-2 rounded-md flex items-center justify-center`, {
    'bg-gray-400': isCommon,
    'bg-blue-300': isRare,
    'bg-purple-400': isEpic,
    'bg-orange-400': isLegendary,
    'bg-red-400': isUnique
  });

  return (
    <div className={cxCardWrapper} onClick={onClick}>
      <Flex className={cxWrapper}>
        <Flex className="flex-col items-start gap-2">
          <Text className={cxId}>#{item.tokenId}</Text>
          <Flex className="justify-center items-center gap-2 mt-1">
            <Text className={cxRarity}>{item.external?.rarity}</Text>
            <Text className="text-md font-black">{item.name}</Text>
          </Flex>
          <Text>
            Amount sale:{' '}
            <b>
              {item.amountSale}/{item.amount}
            </b>
          </Text>
        </Flex>
        <Box className="relative w-full h-full">
          <CustomImage
            loader={externaImageLoader}
            alt={item.name}
            src={item?.external?.iconUrl}
            className="rounded-[2rem]"
            layout="fill"
            objectFit="contain"
            unoptimized={true}
            placeholder="blur"
          />
        </Box>
      </Flex>
    </div>
  );
}
