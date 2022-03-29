import { handlePending, handleFulfilledReplace, handleReject, DEFAULT_BASE_STATE } from './../../store.utils';
import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store/store';
import { getSystemConfig } from './systemConfig.api';
import { SystemConfigState } from './systemConfig.i';
import { DATE_DEFAULT } from 'utils/date';

export const initialState: SystemConfigState = {
  ...DEFAULT_BASE_STATE,
  data: {
    chainId: '',
    chainName: '',
    marketplaceAddress: '',
    nftContractAddress: '',
    marketplaceBlock: '',
    userMintEnable: false,
    multipleMintEnable: false,
    mMFContractAddress: '',
    metaverseContractAddress: '',
    id: '',
    createdAt: DATE_DEFAULT,
    updatedAt: DATE_DEFAULT
  }
};

const systemConfigSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSystemConfig.pending, handlePending)
      .addCase(getSystemConfig.fulfilled, handleFulfilledReplace)
      .addCase(getSystemConfig.rejected, handleReject);
  }
});

export const selectSystemConfig = (state: AppState) => state.systemConfig;
export const selectSystemConfigData = (state: AppState) => state.systemConfig.data || { id: undefined };
export default systemConfigSlice.reducer;
