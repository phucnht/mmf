export type PaginateParamsType = {
  page?: number;
  size?: number;
};

export type PaginateType = {
  total: number;
};

export type PopupController = {
  onSuccess?: () => void;
  onClose: () => void;
};
