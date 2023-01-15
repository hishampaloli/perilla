import { type } from "os";
import { ErrorState, TenantData } from "../../models/tenants";

import { TenantActionsTypes } from "../constants/tenantTypes";

interface BuyProductRequestAction {
  type: TenantActionsTypes.BUY_PRODUCT_REQUETS;
}

interface BuyProductSuccessAction {
  type: TenantActionsTypes.BUY_PRODUCT_SUCCESS;
  payload: TenantData;
}

interface BuyProductFailAction {
  type: TenantActionsTypes.BUY_PRODUCT_FAIL;
  error: ErrorState[];
}

export type BuyProductAction =
  | BuyProductRequestAction
  | BuyProductFailAction
  | BuyProductSuccessAction;

interface GetOtpRequestAction {
  type: TenantActionsTypes.GET_OTP_REQUEST;
}

interface GetOtpSuccessAction {
  type: TenantActionsTypes.GET_OTP_SUCCESS;
  payload: string;
}

interface GetOtpFailAction {
  type: TenantActionsTypes.GET_OTP_FAIL;
  error: ErrorState[];
}

export type GetOtpAction =
  | GetOtpRequestAction
  | GetOtpSuccessAction
  | GetOtpFailAction;
