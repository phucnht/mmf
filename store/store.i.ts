export interface BaseResult<T> {
  errors: any;
  data: T;
}

export interface BaseResults<T> {
  errors: any;
  data: T[];
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
  search?: string;
  page?: number;
  size?: number;
  orderBy?: number;
  desc?: boolean;
}
