import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, LoginState, ProfileRequest } from './auth.i';
import { client } from 'utils/api';
import { AppState } from 'store/store';

export const initialState: AuthState = {
  loading: 'idle',
  error: null,
  loggedIn: false,
  accessToken: null,
  address: null,
  balance: 0,
  noBoxes: 0,
  username: null,
  bio: null,
  email: null,
  playerId: null,
  avatar: null,
  cover: null
};

const pendingStatus = (state: any) => {
  if (state.loading === 'idle') {
    state.loading = 'pending';
  }
};

const rejectResult = (state: any, action: any) => {
  if (state.loading === 'pending') {
    state.loading = 'idle';
    state.error = action.error;
  }
};

const clientAccount = client(process.env.NEXT_PUBLIC_API_ACCOUNT);

export const updateProfile = createAsyncThunk('account/profile', async (params: ProfileRequest) => {
  const res = await clientAccount.put(`/profile/account`, params);
  return res;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload: { accessToken, address } }: PayloadAction<LoginState>) => {
      state.loggedIn = true;
      state.accessToken = accessToken;
      state.address = address;
    },
    logout: () => initialState,
    fetchToken: (state, { payload }: PayloadAction<string>) => {
      state.accessToken = payload;
    },
    fetchBalance: (state, { payload }: PayloadAction<number>) => {
      state.balance = payload;
    },
    fetchAuth: (state, { payload }: PayloadAction<AuthState>) => ({
      ...state,
      ...payload,
      loggedIn: true
    })
  },
  extraReducers: builder => {
    builder
      .addCase(updateProfile.pending, pendingStatus)
      .addCase(updateProfile.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          return { ...state, ...action.payload, loading: 'idle', error: null };
        }
      })
      .addCase(updateProfile.rejected, rejectResult);
  }
});

export const { login, logout, fetchToken, fetchAuth, fetchBalance } = authSlice.actions;
export const selectAuth = (state: AppState) => state.auth;
export default authSlice.reducer;
