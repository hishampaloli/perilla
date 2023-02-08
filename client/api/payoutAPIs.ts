import { resourceService_Url } from "./baseURLs";
import buildClient from "./buildClient";
import { config } from "../redux/constants/config";
import { PayoutDataArr, PayoutDataObj } from "../models/resources";

const payout = "payout";

export const requestPayout__API = (req: any) =>
  buildClient(req).post<PayoutDataObj>(
    `${resourceService_Url}/${payout}/requestPayout`,
    config
  );

export const getAllPayouts_API = (req: any, status: boolean) =>
  buildClient(req).post<PayoutDataArr>(
    `${resourceService_Url}/${payout}/allPayouts`,
    { status },
    config
  );

export const getMyPayouts_API = (req: any) =>
  buildClient(req).get<PayoutDataArr>(
    `${resourceService_Url}/${payout}/myPayouts`,
    config
  );

export const completePayout_API = (req: any, payoutId: string) =>
  buildClient(req).put<PayoutDataObj>(
    `${resourceService_Url}/${payout}/${payoutId}`,
    config
  );
