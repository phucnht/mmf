import { configureStore, Action, ThunkAction, Store } from '@reduxjs/toolkit';
import modalConfirmationReducer from './modal-confirmation/modalConfirmation.slice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const createStore = () => {
  const thunkArguments = {} as ThunkExtraArguments;

  const _store = configureStore({
    reducer: {
      modalConfirmation: modalConfirmationReducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: { extraArgument: thunkArguments }
      })
  });

  thunkArguments.store = _store;

  return _store;
};

export const store = createStore();

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;
export interface ThunkExtraArguments {
  store: Store;
}
