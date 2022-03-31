import { BaseResult, GetResponse, GetState } from 'store/store.i';

export interface SystemConfigDto {
  chainId: string;
  chainName: string;
  marketplaceAddress: string;
  nftContractAddress: string;
  marketplaceBlock: string;
  userMintEnable: boolean;
  multipleMintEnable: boolean;
  mMFContractAddress: string;
  metaverseContractAddress: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export type SystemConfigResult = BaseResult<SystemConfigDto>;
export type SystemConfigState = GetState<SystemConfigResult>;
export type GetSystemConfigResponse = GetResponse<SystemConfigResult>;
