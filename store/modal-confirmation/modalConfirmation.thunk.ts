import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppState, ThunkExtraArguments } from '../store';
import { modalConfirmationActions, ModalConfirmationPayload } from './modalConfirmation.slice';

const modalConfirmationThunkActions = {
  open: createAsyncThunk<
    boolean,
    ModalConfirmationPayload,
    {
      extra: ThunkExtraArguments;
    }
  >('modalConfirmation', async ({ title, description, type }, { extra, dispatch }) => {
    const store = extra.store;

    dispatch(modalConfirmationActions.open({ title, description, type }));

    return new Promise<boolean>(resolve => {
      const unsubscribe = store.subscribe(() => {
        const state: AppState = store.getState();
        if (state.modalConfirmation.isConfirmed) {
          unsubscribe();
          resolve(true);
        }
        if (state.modalConfirmation.isDeclined) {
          unsubscribe();
          resolve(false);
        }
      });
    });
  })
};

export default modalConfirmationThunkActions;
