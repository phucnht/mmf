import { PaginateParamsType, PaginateType } from './Common';
import { SaleType } from './Sale';
import { UserType } from './User';

export type RarityType = 'Common' | 'Rare' | 'Epic' | 'Legendary';

export type ItemType = {
  id: string;
  name: string;
  description: string;
  type: 721 | 1155;
  listedOnMarket: boolean;
  sale?: SaleType;
  ownerAddress: string;
  owner: UserType;
  external: {
    iconUrl: string;
    modelUrl: string;
    uvUrl: string;
    backgroundUrl: string;
    itemType: string;
    description: string;
    rarity: RarityType;
  };
  nftContract: string;
  tokenId: string;
};

export type ItemPaginateParams = PaginateParamsType & {
  search?: string;
  orderBy?: string;
  desc?: string;
  owner?: string;
  listedOnMarket?: string;
};

export type ItemPaginateType = PaginateType & {
  items: ItemType[];
  currentPage: number;
  total: number;
  pages: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
};
