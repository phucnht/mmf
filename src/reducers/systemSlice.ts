import { createSlice } from '@reduxjs/toolkit';
import { SystemType } from 'models/System';
import { RootState } from './store';

const systemSlice = createSlice({
  name: 'system',
  initialState: {} as SystemType,
  reducers: {
    save: (state, { payload }) => {
      state = { ...state, ...payload };
      return state;
    },
  },
});

export const { save: saveSystem } = systemSlice.actions;

export const systemSelector = ({ system }: RootState) => system;

export default systemSlice.reducer;
