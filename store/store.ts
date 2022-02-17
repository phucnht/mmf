import { configureStore, Action, ThunkAction, Store, combineReducers, AnyAction } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import storage from 'redux-persist/lib/storage/session';

import modalConfirmationReducer from './modal-confirmation/modalConfirmation.slice';
import authReducer, { logout } from './account/auth/auth.slice';
import profileReducer from './account/profile/profile.slice';
import nftItemReducer from './market/nft-item/nftItem.slice';
import systemConfigReducer from './market/system-config/systemConfig.slice';
import paymentTokenReducer from './market/payment-token/paymentToken.slice';
import airdropEventReducer from './market/airdrop-event/airdropEvent.slice';

const appReducer = combineReducers({
  modalConfirmation: modalConfirmationReducer,
  // Logic API
  auth: authReducer,
  profile: profileReducer,
  nftItem: nftItemReducer,
  systemConfig: systemConfigReducer,
  paymentToken: paymentTokenReducer,
  airdropEvent: airdropEventReducer
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === logout.type) {
    storage.removeItem('persist:root');
    return appReducer({ ...state, auth: undefined, profile: undefined }, action);
  }
  return appReducer(state, action);
};

const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage: storage
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const createStore = () => {
  const thunkArguments = {} as ThunkExtraArguments;

  const _store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: { extraArgument: thunkArguments },
        serializableCheck: false
      })
  });

  thunkArguments.store = _store;

  return _store;
};

export const store = createStore();

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;
export interface ThunkExtraArguments {
  store: Store;
}
