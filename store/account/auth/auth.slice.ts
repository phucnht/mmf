import { handleFulfilled, handleReject } from './../../store.utils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './auth.i';
import { AppState } from 'store/store';
import { DEFAULT_BASE_STATE, handlePending } from 'store/store.utils';
import { getNonce, getToken } from './auth.api';

export const initialState: AuthState = { ...DEFAULT_BASE_STATE, data: { accessToken: '', address: '', balance: 0 } };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      {
        payload: {
          data: { accessToken, address }
        }
      }: PayloadAction<AuthState>
    ) => {
      state.data.accessToken = accessToken;
      state.data.address = address;
    },
    logout: () => initialState,
    fetchToken: (state, { payload }: PayloadAction<string>) => {
      state.data.accessToken = payload;
    },
    fetchBalance: (state, { payload }: PayloadAction<number>) => {
      state.data.balance = payload;
    }
  },
  extraReducers: builder => {
    builder
      // NONCE
      .addCase(getNonce.pending, handlePending)
      .addCase(getNonce.fulfilled, handleFulfilled)
      .addCase(getNonce.rejected, handleReject)
      // TOKEN
      .addCase(getToken.pending, handlePending)
      .addCase(getToken.fulfilled, handleFulfilled)
      .addCase(getToken.rejected, handleReject);
  }
});

export const { login, logout, fetchToken, fetchBalance } = authSlice.actions;
export const selectAuth = (state: AppState) => state.auth;
export default authSlice.reducer;
