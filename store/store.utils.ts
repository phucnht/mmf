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
