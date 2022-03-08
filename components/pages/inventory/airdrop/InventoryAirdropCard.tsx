import classNames from 'classnames';
import Image from 'components/display/image/Image';
import { MouseEventHandler } from 'react';
import { MediaDto } from 'store/market/nft-item/nftItem.i';
import imgItem from 'public/assets/img-video/item.png';
import { Text } from '@whammytechvn/wt-components';

export interface InventoryAirdropDto {
  tokenId: string;
  name: string;
  media: MediaDto[];
}
export interface InventoryAirdropCardProps {
  item: InventoryAirdropDto;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function InventoryAirdropCard({ item, onClick }: InventoryAirdropCardProps) {
  const cxCardWrapper = classNames('hover:opacity-90 transition', { 'cursor-pointer': onClick });

  return (
    <div className={cxCardWrapper} onClick={onClick}>
      <Text className={'bg-blue-300 text-xs font-black py-2 px-5 rounded-[2rem] w-fit'}>#{item.tokenId}</Text>
      <Image alt={item.name} src={imgItem} />
    </div>
  );
}
