import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const networkSlice = createSlice({
  name: 'network',
  initialState: {
    onOpen: 0,
  },
  reducers: {
    openSwitchNetwork: (state, { payload }) => {
      return { ...payload, onOpen: Math.random() };
    },
    closeSwitchNetwork: (state, { payload }) => {
      return { ...payload, onOpen: 0 };
    },
  },
});

export const { openSwitchNetwork, closeSwitchNetwork } = networkSlice.actions;

export const networkSelector = ({ network }: RootState) => network;

export default networkSlice.reducer;
