import _ from 'lodash';
import { PaginationDto, PaginationRequest } from './store.i';

export const DEFAULT_PAGINATION_RESPONSE: PaginationDto = {
  total: 0,
  currentPage: 1,
  size: 0,
  pages: 0,
  hasNext: false,
  hasPrevious: false
};

export const DEFAULT_PAGINATION_REQUEST: PaginationRequest = {
  search: '',
  page: 0,
  size: 0,
  orderBy: '',
  desc: false
};

export const DEFAULT_BASE_STATE = {
  errors: undefined,
  loading: false
};

export const DEFAULT_BASE_STATE_PAGINATION = {
  ...DEFAULT_BASE_STATE,
  ...DEFAULT_PAGINATION_RESPONSE,
  data: []
};

export const DEFAULT_BASE_STATE_LIST = {
  ...DEFAULT_BASE_STATE,
  data: []
};

export const handlePending = (state: any) => {
  if (state.loading === false) {
    state.loading = true;
  }
};

export const handleFulfilled = (state: any, action: any) => {
  if (state.loading === true) {
    return { ...DEFAULT_BASE_STATE, data: { ...state.data, ...action.payload } };
  }
};

export const handleFulfilledReplace = (state: any, action: any) => {
  if (state.loading === true) {
    return { ...DEFAULT_BASE_STATE, data: action.payload };
  }
};

export const handleFulfilledPagination = (state: any, action: any) => {
  if (state.loading === true) {
    const { items, ...pagination } = action.payload;
    return { ...DEFAULT_BASE_STATE, ...pagination, data: _.uniqBy([...state.data, ...items], 'id') };
  }
};

export const handleReject = (state: any, action: any) => {
  if (state.loading === true) {
    state.loading = false;
    state.errors = action.errors;
  }
};
