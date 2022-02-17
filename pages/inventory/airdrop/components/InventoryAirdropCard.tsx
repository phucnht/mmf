import classNames from 'classnames';
import Image from 'components/display/image/Image';
import { MouseEventHandler } from 'react';

export interface InventoryAirdropCardProps {
  item: {
    id: string;
    name: string;
    imgSrc: StaticImageData | undefined;
  };
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export default function InventoryAirdropCard({ item, onClick }: InventoryAirdropCardProps) {
  const cxCardWrapper = classNames('hover:opacity-90 transition', { 'cursor-pointer': onClick });

  return (
    <div className={cxCardWrapper} onClick={onClick}>
      <Image alt={item.name} src={item.imgSrc} />
    </div>
  );
}
