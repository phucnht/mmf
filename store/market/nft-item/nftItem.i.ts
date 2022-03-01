import { HistoryType } from './../../store.enum';
import { PaymentTokenDto } from '../payment-token/paymentToken.i';
import { BasicUserDto } from 'store/account/profile/profile.i';
import { BaseResultPagination, GetState, PaginationRequest } from 'store/store.i';

export enum NftItemStatus {
  Minting,
  Available,
  Locked,
  Burned,
  Burning,
  Evolving
}

export enum NftItemMarketType {
  NotForSale,
  Sale,
  Auction
}

export enum NftItemMarketStatus {
  NotAvailable,
  Available,
  InTransactionProcess,
  Sold,
  Cancelled
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
  marketType: NftItemMarketType;
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

export interface NftItemHistoryDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  itemId: string;
  fromAddress: string;
  fromUser: BasicUserDto;
  toAddress: string;
  toUser: BasicUserDto;
  tokenId: string;
  nftContract: string;
  amount: number;
  paymentToken: PaymentTokenDto;
  paymentTokenId: string;
  type: HistoryType;
}

export type NftItemRequest = {
  status?: NftItemStatus;
  marketType?: NftItemMarketType;
  marketStatus?: NftItemMarketStatus;
  owner?: string;
  paymentTokenId?: string;
  listedOnMarket?: boolean;
  onTopFlag?: boolean;
  elements?: string[];
  classes?: string[];
  qualitys?: string[];
  minPrice?: string;
  maxPrice?: string;
  minTier?: string;
  maxTier?: string;
  minLevel?: string;
  maxLevel?: string;
} & PaginationRequest;

export type InventoryRequest = PaginationRequest;
export type NftItemHistoryRequest = {
  nftItemId: string;
  userAddress?: string;
  type?: HistoryType;
} & PaginationRequest;

export type NftItemsState = GetState<BaseResultPagination<NftItemDto>>;
export type InventoryState = GetState<BaseResultPagination<NftItemDto>>;
export type NftItemHistoryState = GetState<BaseResultPagination<NftItemHistoryDto>>;
