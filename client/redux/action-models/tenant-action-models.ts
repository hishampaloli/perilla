import { ErrorState, TenantData } from "../../models/tenants";

import { TenantActionsTypes } from "../constants/tenantTypes";

interface GetOtpRequestAction {
  type: TenantActionsTypes.GET_OTP_REQUEST;
}

interface GetOtpFailAction {
  type: TenantActionsTypes.GET_OTP_FAIL;
  error: ErrorState[];
}

export type GetOtpAction = GetOtpRequestAction | GetOtpFailAction;

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

interface LogoutSuccessAction {
  type: TenantActionsTypes.LOGOUT_SUCCESS;
  payload: any;
}

interface LogoutFailedAction {
  type: TenantActionsTypes.AUTH_FAIL;
  error: ErrorState[];
}

export type LogoutAction = LogoutSuccessAction | LogoutFailedAction;

interface getPaidTenentFail {
  type: TenantActionsTypes.GET_PAID_TENANT_SUCCESS;
  payload: TenantData;
}

interface getPaidTenentSuccess {
  type: TenantActionsTypes.GET_PAID_TENANT_FAIL;
  error: ErrorState[];
}

export type GetPaidTenantAction = getPaidTenentFail | getPaidTenentSuccess;

interface stripePaymentLinkSuccess {
  type: TenantActionsTypes.SENT_STRIPE_LINK_SUCCESS;
  payload: { url: string };
}

interface stripePaymentLinkFail {
  type: TenantActionsTypes.SENT_STRIPE_LINK_FAIL;
  error: ErrorState[];
}

export type StripeLinkAction = stripePaymentLinkSuccess | stripePaymentLinkFail;

interface stripePaymentVerificationSuccess {
  type: TenantActionsTypes.AUTH_SUCCESS;
  payload: TenantData;
}

interface stripePaymentVerificationClearLink {
  type: TenantActionsTypes.SENT_STRIPE_LINK_FAIL;
  error: ErrorState[] | null;
}
export type StripeVerificationAction =
  | stripePaymentVerificationSuccess
  | stripePaymentVerificationClearLink;
