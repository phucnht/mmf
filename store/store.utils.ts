import _isArray from 'lodash/isArray';

export const DEFAULT_PAGINATION = {
  total: 0,
  currentPage: 1,
  size: 0,
  pages: 0,
  hasNext: false,
  hasPrevious: false
};

export const DEFAULT_BASE_STATE = {
  errors: undefined,
  loading: false
};

export const DEFAULT_BASE_STATE_PAGINATION = {
  ...DEFAULT_BASE_STATE,
  data: {
    ...DEFAULT_PAGINATION,
    items: []
  }
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
    let data;
    if (_isArray(state.data)) {
      data = [...state.data, ...action.payload];
    } else {
      data = { ...state.data, ...action.payload };
    }
    return { ...DEFAULT_BASE_STATE, data };
  }
};

export const handleReject = (state: any, action: any) => {
  if (state.loading === true) {
    state.loading = false;
    state.errors = action.errors;
  }
};
