import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthDto, AuthState } from './auth.i';
import { AppState } from 'store/store';
import { DEFAULT_BASE_STATE } from 'store/store.utils';

export const initialState: AuthState = {
  ...DEFAULT_BASE_STATE,
  data: { accessToken: '', address: '', balance: 0, balance2: 0 }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginLoading: (state, { payload }) => {
      state.loading = payload;
    },
    login: (state, { payload: { accessToken, address, balance, balance2 } }: PayloadAction<AuthDto>) => {
      state.data.accessToken = accessToken;
      state.data.address = address;
      state.data.balance = balance;
      state.data.balance2 = balance2;
      state.loading = false;
    },
    logout: () => initialState,
    fetchToken: (state, { payload }: PayloadAction<string>) => {
      state.data.accessToken = payload;
    },
    fetchBalance: (state, { payload }: PayloadAction<number>) => {
      state.data.balance = payload;
    }
  }
});

export const { loginLoading, login, logout, fetchToken, fetchBalance } = authSlice.actions;
export const selectAuthState = (state: AppState) => state.auth;
export const selectAuthData = (state: AppState) => state.auth.data;
export default authSlice.reducer;
