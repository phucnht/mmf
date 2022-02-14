import { PaymentTokenDto } from '../payment-token/paymentToken.i';
import { BasicUserDto } from 'store/user/user.dto';
import { BaseResultPagination, StateLoading } from 'store/store.i';

export enum MarketType {
  NotForSale,
  Sale,
  Auction
}

export interface AttributeDto {
  name: string;
  value: string;
}

export interface MediaDto {
  url: string;
  type: number;
  extension: string;
}

export interface SaleBidDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  name: string;
  image: string;
  itemId: string;
  tokenId: string;
  nftContract: string;
  price: any;
  matchedTransactionHash: string;
  matchedBlock: string;
  bidUserAddress: string;
  bidUsername: string;
  bidUserAvatar: string;
  saleUserAddress: string;
  saleUserAvatar: string;
  saleUsername: string;
  status: number;
}

export interface SaleDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  paymentTokenId: string;
  paymentToken: PaymentTokenDto;
  price: number;
  cancelled: boolean;
  startTime: Date;
  endTime: Date;
  status: number;
  bid: SaleBidDto;
  signedSignature: number;
}

export interface NftItemDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  marketType: MarketType;
  listedOnMarket: boolean;
  nativeNftToken: boolean;
  attributes: AttributeDto[];
  media: MediaDto[];
  image: string;
  collectionId: string;
  status: number;
  creatorAddress: string;
  creatorUsername: string;
  creator: BasicUserDto;
  ownerAddress: string;
  owner: BasicUserDto;
  nftContract: string;
  tokenId: string;
  externalUrl: string;
  description: string;
  name: string;
  sale: SaleDto;
  saltNonce: number;
  evolveSaltNonce: number;
}

export type GetNftItemsResponse = BaseResultPagination<NftItemDto>;

export type NftItemsState = StateLoading & GetNftItemsResponse;

export interface NftItemRequest {
  sort?: string;
  text?: string;
  listedByMe?: string;
  class?: string;
  element?: string;
  quality?: string;
  tiers?: string;
  levels?: string;
  minPrice?: string;
  maxPrice?: string;
  owner?: string;
  sortBy?: string;
  page?: number;
}
