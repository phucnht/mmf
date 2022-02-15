import { BaseResults, GetResponse, GetState } from 'store/store.i';

export interface AirdropEventDto {
  id: string;
  name: string;
  condition: string;
  description: string;
  tokenId: string;
  onchainId: string;
  createdAt: Date;
  updatedAt: Date;
  fromDate: Date;
  toDate: Date;
  amount: number;
  nftType: number;
  nft721Contract: string | null;
  nft1155Contract: string | null;
  itemImage: string;
  backgroundImage: string;
}

export interface AirdropEventRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  onchainId: string;
  fromDate: Date;
  toDate: Date;
  tokenId: string;
  nftType: number;
  amount: number;
  nftContract: string;
  whitelistContract: string;
  itemImage: string;
  backgroundImage: string;
  name: string;
  description: string;
  condition: string;
}

export type AirdropEventResult = BaseResults<AirdropEventDto>;
export type AirdropEventState = GetState<AirdropEventResult>;

export type GetAirdropEventsReponse = GetResponse<AirdropEventResult>;
