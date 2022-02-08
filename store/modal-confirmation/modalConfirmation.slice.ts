import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalConfirmationPayload {
  title?: string;
  description?: string;
  type: 'createGameProfile' | 'account' | 'confirm';
  size: 'md' | 'sm';
}

export type ModalConfirmationState = {
  isOpened: boolean;
  isConfirmed: boolean;
  isDeclined: boolean;
} & ModalConfirmationPayload;

export const initialModalConfirmationState: ModalConfirmationState = {
  isOpened: false,
  title: 'Modal Title',
  description: 'Modal Content',
  type: 'confirm',
  size: 'sm',
  isConfirmed: false,
  isDeclined: false
};

export const modalConfirmationSlice = createSlice({
  name: 'modalConfirmation',
  initialState: initialModalConfirmationState,
  reducers: {
    open: (state, action: PayloadAction<ModalConfirmationPayload>) => {
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.type = action.payload.type;
      state.size = action.payload.size;
      state.isOpened = true;
      state.isDeclined = false;
      state.isConfirmed = false;
    },
    confirm: state => {
      state.isConfirmed = true;
      state.isOpened = false;
    },
    decline: state => {
      state.isDeclined = true;
      state.isOpened = false;
    }
  }
});

export const modalConfirmationActions = modalConfirmationSlice.actions;

export default modalConfirmationSlice.reducer;
