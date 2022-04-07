import classNames from 'classnames';
import CustomImage, { externaImageLoader } from 'components/display/image/CustomImage';
import { MouseEventHandler } from 'react';
import { Box, Flex, Text } from '@whammytechvn/wt-components';
import { NftItemDto } from 'store/market/nft-item/nftItem.i';

export interface InventoryAirdropCardProps {
  item: NftItemDto;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function InventoryAirdropCard({ item, onClick }: InventoryAirdropCardProps) {
  const cxCardWrapper = classNames('flex flex-col text-white hover:opacity-90 transition', {
    'cursor-pointer': onClick
  });
  const cxId = classNames('bg-blue-300 text-xs font-black py-2 px-5 rounded-[2rem]');
  const cxWrapper = classNames(
    'border-blue-300 flex-col justify-between items-start p-2 rounded-[2rem] border-[5px] h-[36rem] gap-4'
  );

  return (
    <div className={cxCardWrapper} onClick={onClick}>
      <Flex className={cxWrapper}>
        <Flex className="flex-col items-start gap-2">
          <Text className={cxId}>#{item.tokenId}</Text>
          <Text>
            Amount sale:
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
