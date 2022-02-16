import { configureStore, Action, ThunkAction, Store, combineReducers, AnyAction } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import storage from 'redux-persist/lib/storage/session';

import modalConfirmationReducer from './modal-confirmation/modalConfirmation.slice';
import authReducer, { logout } from './account/auth/auth.slice';
import profileReducer from './account/profile/profile.slice';
import airdropEventReducer from './market/airdrop-event/airdropEvent.slice';
import inventoryReducer from './market/nft-item/nftItem.slice';
import marketplaceReducer from './market/nft-item/nftItem.slice';
import systemConfigReducer from './market/system-config/systemConfig.slice';
import paymentTokenReducer from './market/payment-token/paymentToken.slice';

const appReducer = combineReducers({
  modalConfirmation: modalConfirmationReducer,
  auth: authReducer,
  profile: profileReducer,
  airdropEvent: airdropEventReducer,
  inventory: inventoryReducer,
  marketplace: marketplaceReducer,
  systemConfig: systemConfigReducer,
  paymentToken: paymentTokenReducer
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === logout.type) {
    storage.removeItem('persist:root');
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStore = () => {
  const thunkArguments = {} as ThunkExtraArguments;

  const _store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
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
