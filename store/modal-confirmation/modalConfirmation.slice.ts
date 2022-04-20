import { ObjectProps } from 'utils/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ModalSize = 'md' | 'sm' | 'max' | 'min' | 'fit';
export type ModalType =
  | 'createGameProfile'
  | 'account'
  | 'confirm'
  | 'login'
  | 'network'
  | 'checkout'
  | 'listing'
  | 'cancel-listing'
  | 'completed'
  | 'failed'
  | 'processing';

export interface ModalConfirmationPayload {
  data?: ObjectProps;
  size?: ModalSize;
  type?: ModalType;
  isClosable?: boolean;
}

export type ModalConfirmationState = {
  isOpened: boolean;
  isConfirmed: boolean;
  isDeclined: boolean;
} & ModalConfirmationPayload;

export const initialModalConfirmationState: ModalConfirmationState = {
  isOpened: false,
  data: {},
  type: 'confirm',
  size: 'sm',
  isConfirmed: false,
  isDeclined: false,
  isClosable: true
};

export const modalConfirmationSlice = createSlice({
  name: 'modalConfirmation',
  initialState: initialModalConfirmationState,
  reducers: {
    open: (state, action: PayloadAction<ModalConfirmationPayload>) => {
      state.data = action.payload.data;
      state.type = action.payload.type;
      state.size = action.payload.size;
      state.isOpened = true;
      state.isDeclined = false;
      state.isConfirmed = false;
      state.isClosable = action.payload.isClosable;
      if (!document.body.classList.contains('modal-opened')) {
        document.body.classList.add('modal-opened');
      }
    },
    confirm: (state, action: PayloadAction<ModalConfirmationPayload>) => {
      // if (action.payload.isOpened) {
      // }
      state.isOpened = false;
      state.isConfirmed = true;
      if (document.body.classList.contains('modal-opened')) {
        document.body.classList.remove('modal-opened');
      }
    },
    decline: state => {
      state.isDeclined = true;
      state.isOpened = false;
      if (document.body.classList.contains('modal-opened')) {
        document.body.classList.remove('modal-opened');
      }
    },
    close: state => {
      state.isOpened = false;
      if (document.body.classList.contains('modal-opened')) {
        document.body.classList.remove('modal-opened');
      }
    }
  }
});

export const modalConfirmationActions = modalConfirmationSlice.actions;

export default modalConfirmationSlice.reducer;
