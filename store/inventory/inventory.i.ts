import { NftItemDto } from 'store/nft-item/nftItem.i';
import { BaseResultPagination, GetResponse, GetState } from 'store/store.i';

export type InventoryResult = BaseResultPagination<NftItemDto>;
export type InventoryState = GetState<InventoryResult>;
export type GetInventoriesReponse = GetResponse<InventoryResult>;
