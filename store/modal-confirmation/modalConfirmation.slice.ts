import { ObjectProps } from 'utils/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ModalSize = 'md' | 'sm' | 'max' | 'min' | 'fit';
export type ModalType =
  | 'createGameProfile'
  | 'account'
  | 'confirm'
  | 'login'
  | 'checkout'
  | 'listing'
  | 'cancel-listing'
  | 'completed'
  | 'failed'
  | 'processing';

export interface ModalConfirmationPayload {
  data?: ObjectProps;
  size?: ModalSize;
  type: ModalType;
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
    },
    confirm: state => {
      state.isConfirmed = true;
      state.isOpened = false;
    },
    decline: state => {
      state.isDeclined = true;
      state.isOpened = false;
    },
    close: state => {
      state.isOpened = false;
    }
  }
});

export const modalConfirmationActions = modalConfirmationSlice.actions;

export default modalConfirmationSlice.reducer;
