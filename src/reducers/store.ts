import { configureStore } from '@reduxjs/toolkit';
import network from './networkSlice';
import notification from './notificationSlice';
import profile from './profileSlice';
import system from './systemSlice';

export const store = configureStore({
  reducer: {
    network,
    notification,
    profile,
    system,
  },
});

export type RootState = ReturnType<typeof store.getState>;
