import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export type ProfileState = {
  isLoggedIn?: boolean;
  accessToken?: string;

  address?: string;
  username?: string;
  isMinter?: boolean;
  bio?: string;
  email?: string;
  ckeditor?: string;
  avatar?: string;
  cover?: string;
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {} as ProfileState,
  reducers: {
    signIn: (state, { payload }) => {
      const profile = { ...state, ...payload, isLoggedIn: true };
      localStorage.setItem('profile', JSON.stringify(profile));
      return profile;
    },
    signOut: () => {
      localStorage.removeItem('profile');
      return { isLoggedIn: false };
    },
  },
});

export const { signIn, signOut } = profileSlice.actions;

export const profileSelector = ({ profile }: RootState) => profile;

export default profileSlice.reducer;
