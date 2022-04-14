import classNames from 'classnames';
import CustomImage, { externaImageLoader } from 'components/display/image/CustomImage';
import { MouseEventHandler } from 'react';
import { Box, Flex, Text } from '@whammytechvn/wt-components';
import { NftItemDto } from 'store/market/nft-item/nftItem.i';

const RARITY_COLOR = {
  Common: 'gray-400',
  Rare: 'blue-300',
  Epic: 'purple-400',
  Legendary: 'orange-300',
  Unique: 'red-400'
};

export interface InventoryAirdropCardProps {
  item: NftItemDto;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function InventoryAirdropCard({ item, onClick }: InventoryAirdropCardProps) {
  const rarity = item.external?.rarity;

  const cxCardWrapper = classNames('flex flex-col text-white hover:opacity-90 transition', {
    'cursor-pointer': onClick
  });
  const cxWrapper = classNames(
    `flex-col justify-between items-start p-2 rounded-[2rem] border-[5px] h-[36rem] gap-4 border-${RARITY_COLOR[rarity]}`
  );
  const cxId = classNames(
    `text-xs font-black py-2 px-5 rounded-[2rem] flex items-center justify-center bg-${RARITY_COLOR[rarity]}`
  );
  const cxRarity = classNames(
    `text-xs uppercase py-2 px-2 rounded-md flex items-center justify-center bg-${RARITY_COLOR[rarity]}`
  );

  return (
    <div className={cxCardWrapper} onClick={onClick}>
      <Flex className={cxWrapper}>
        <Flex className="flex-col items-start gap-2">
          <Text className={cxId}>#{item.tokenId}</Text>
          <Flex className="justify-center items-center gap-2 mt-1">
            <Text className={cxRarity}>{rarity}</Text>
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
