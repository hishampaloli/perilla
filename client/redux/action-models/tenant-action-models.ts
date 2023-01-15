import { type } from "os";
import { ErrorState, TenantData } from "../../models/tenants";

import { TenantActionsTypes } from "../constants/tenantTypes";

interface AuthRequestAction {
  type: TenantActionsTypes.AUTH_REQUETS;
}

interface AuthSuccessAction {
  type: TenantActionsTypes.AUTH_SUCCESS;
  payload: TenantData;
}

interface AuthFailAction {
  type: TenantActionsTypes.AUTH_FAIL;
  error: ErrorState[];
}

export type AuthAction = AuthRequestAction | AuthFailAction | AuthSuccessAction;

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
