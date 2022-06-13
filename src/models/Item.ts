import { PaginateParamsType, PaginateType } from './Common';
import { PaymentTokenType, SaleType } from './Sale';
import { UserType } from './User';

export type RarityType = 'Common' | 'Rare' | 'Epic' | 'Legendary';

export type ExternalType = {
  iconUrl: string;
  modelUrl: string;
  uvUrl: string;
  itemType: string;
  description: string;
  rarity: RarityType;
};

export type ItemType = {
  id: string;
  name: string;
  description: string;
  type: 721 | 1155;
  listedOnMarket: boolean;
  sale?: SaleType;
  ownerAddress: string;
  owner: UserType;
  external: ExternalType;
  amount: number;
  nftContract: string;
  tokenId: string;
};

export type SaleItemType = {
  id: string;
  nftItem: string;
  name: string;
  description: string;
  type: 721 | 1155;
  ownerAddress: string;
  external: ExternalType;
  amount: number;
  nftContract: string;
  tokenId: string;
  price: number;
  signedSignature: string;
  paymentToken: PaymentTokenType;
  saltNonce: number;
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

export type SalePaginateType = PaginateType & {
  items: SaleItemType[];
  currentPage: number;
  total: number;
  pages: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
};
