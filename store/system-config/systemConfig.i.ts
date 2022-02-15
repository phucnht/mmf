import { BaseResult, GetResponse, GetState } from '../store.i';

export interface SystemConfigDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  chainId: string;
  chainName: string;
  factoryAddress: string;
  nftContractAddress: string;
  marketplaceAddress: string;
  boxPaymentContractAddress: string;
  factoryBlock: string;
  nftContractBlock: string;
  marketplaceBlock: string;
  boxPaymentContractBlock: string;
  userMintEnable: string;
  multipleMintEnable: true;
  boxContractBlock: string;
  boxContractAddress: string;
  nftEvolveContractAddress: string;
  nftEvolveContractBlock: string;
}

export type SystemConfigResult = BaseResult<SystemConfigDto>;
export type SystemConfigState = GetState<SystemConfigResult>;
export type GetSystemConfigResponse = GetResponse<SystemConfigResult>;
