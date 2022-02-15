export const DEFAULT_PAGINATION = {
  total: 0,
  currentPage: 1,
  size: 0,
  pages: 0,
  hasNext: false,
  hasPrevious: false
};

export const DEFAULT_BASE_RESULT = {
  error: undefined,
  data: null,
  loading: false
};

export const DEFAULT_BASE_RESULTS = {
  error: undefined,
  data: [],
  loading: false
};

export const DEFAULT_BASE_RESULT_PAGINATION = {
  error: undefined,
  data: [],
  loading: false,
  ...DEFAULT_PAGINATION
};

export const pendingStatus = (state: any) => {
  if (state.loading === false) {
    state.loading = true;
  }
};

export const rejectResult = (state: any, action: any) => {
  if (state.loading === true) {
    state.loading = false;
    state.error = action.error;
  }
};
