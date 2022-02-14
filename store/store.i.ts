export interface BaseResult<T> {
  errors: any;
  data: T | null;
  success: boolean;
}

export interface BaseResults<T> {
  errors: any;
  data: T[] | null;
  success: boolean;
}

export interface BaseResultPagination<T> {
  errors: any;
  data: PaginationDto<T> | null;
  success: boolean;
}

export interface PaginationDto<T> {
  total: number;
  currentPage: number;
  size: number;
  pages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  items: T[];
}

export interface StateLoading {
  loading: boolean;
}

export interface PaginationRequest {
  sortBy?: string;
  page?: number;
}
