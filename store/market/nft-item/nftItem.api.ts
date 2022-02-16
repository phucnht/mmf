import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientMarket } from 'utils/api';
import { NftItemRequest } from './nftItem.i';

export const getNftItems = createAsyncThunk('nftItems/get', async (params: NftItemRequest) =>
  clientMarket.get(`/items`, { params })
);
