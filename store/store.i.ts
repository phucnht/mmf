export interface BaseResult<T> {
  error: any;
  data: T | null;
}

export interface BaseResults<T> {
  error: any;
  data: T[] | null;
}

export type BaseResultPagination<T> = BaseResults<T> & PaginationDto;

export type GetState<T> = { loading: boolean } & T;
export type GetResponse<T> = { success: boolean } & T;

export interface PaginationDto {
  total: number;
  currentPage: number;
  size: number;
  pages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface PaginationRequest {
  sortBy?: string;
  page?: number;
}
