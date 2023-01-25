import { ErrorState } from "../../models/tenants";
import { EmployeeActionsTypes } from "../constants";

interface GetEmployeeLoginOtpRequestAction {
  type: EmployeeActionsTypes.GET_OTP_REQUETS;
}

interface GetEmployeeLoginOtpSuccessAction {
  type: EmployeeActionsTypes.GET_OTP_SUCCESS;
}

interface GetEmployeeLoginOtpFailAction {
  type: EmployeeActionsTypes.GET_OTP_FAIL;
  error: ErrorState[];
}

export type GetEmployeeLoginOtpAction =
  | GetEmployeeLoginOtpRequestAction
  | GetEmployeeLoginOtpSuccessAction
  | GetEmployeeLoginOtpFailAction;

interface GetEmployeeLoginVerificationRequestAction {
  type: EmployeeActionsTypes.GET_OTP_VERIFICATION_REQUETS;
}

interface GetEmployeeLoginVerificationSuccessAction {
  type: EmployeeActionsTypes.GET_OTP_VERIFICATION_SUCCESS;
}

interface GetEmployeeLoginVerificationFailAction {
  type: EmployeeActionsTypes.GET_OTP_VERIFICATION_FAIL;
  error: ErrorState[];
}

export type GetEmployeeLoginVerificationAction =
  | GetEmployeeLoginVerificationRequestAction
  | GetEmployeeLoginVerificationSuccessAction
  | GetEmployeeLoginVerificationFailAction;
