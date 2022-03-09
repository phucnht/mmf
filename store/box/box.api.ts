import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientMarket } from 'utils/api';
import { GetBoxesRequest, GetBoxHashMessageRequest } from './box.i';

export const getBoxes = (params?: GetBoxesRequest) => clientMarket.get(`/boxes`, { params });
export const getBox = (id: string) => clientMarket.get(`/boxes/${id}`);
export const getBoxHashMessage = (id: string, params?: GetBoxHashMessageRequest) =>
  clientMarket.get(`/boxes/${id}/hash-message`, { params });
export const syncBoxes = () => clientMarket.post(`/boxes/data-sync`);
export const createSale = (id: string) => clientMarket.post(`/boxes/${id}/sale`);
export const delateSale = (id: string) => clientMarket.delete(`/boxes/${id}/sale`);

export const getBoxesThunk = createAsyncThunk('boxes/get', getBoxes);
