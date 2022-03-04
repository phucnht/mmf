import { BaseResults, GetResponse, GetState } from 'store/store.i';

export interface DashboardDto {
  totalItem: number;
  totalBox: number;
  totalItemMarket: number;
  totalBoxMarket: number;
  totalBoxSale: number;
  totalUserToGame: number;
}

export interface DashboardRequest {
  fromDate: Date;
  toDate: Date;
}

export type DashboardResult = BaseResults<DashboardDto>;
export type GetDashboardReponse = GetResponse<DashboardDto>;

export type DashboardState = GetState<DashboardResult>;
