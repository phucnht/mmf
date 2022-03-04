import { SaleDto } from './../market/nft-item/nftItem.i';
import { BasicUserDto } from 'store/account/profile/profile.i';
import { PaginationRequest, GetState, BaseResultPagination } from 'store/store.i';

export interface BoxDto {
  status: number;
  type: number;
  listedOnMarket: boolean;
  saltNonce: number;
  marketType: number;
  tokenId: string;
  ownerAddress: string;
  owner: BasicUserDto;
  sale: SaleDto;
  nftContract: string;
  block: number;
  transactionHash: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

export type GetBoxesRequest = {
  minPrice?: string;
  maxPrice?: string;
  listedOnMarket?: boolean;
  owner?: string;
} & PaginationRequest;

export type GetBoxHashMessageRequest = {
  price: number;
  paymentTokenId: string;
};

export type BoxState = GetState<BaseResultPagination<BoxDto>>;
