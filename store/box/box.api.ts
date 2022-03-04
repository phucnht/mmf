import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientBox, clientMarket } from 'utils/api';
import { GetBoxesRequest, GetBoxHashMessageRequest } from './box.i';

export const getBoxes = (params?: GetBoxesRequest) => clientBox.get(`/`, { params });
export const getBox = (id: string) => clientMarket.get(`/${id}`);
export const getBoxHashMessage = (id: string, params?: GetBoxHashMessageRequest) =>
  clientMarket.get(`/${id}/hash-message`, { params });
export const syncBoxes = () => clientMarket.post(`/data-sync`);
export const createSale = (id: string) => clientMarket.post(`/${id}/sale`);
export const delateSale = (id: string) => clientMarket.delete(`/${id}/sale`);

export const getBoxesThunk = createAsyncThunk('boxes/get', getBoxes);
