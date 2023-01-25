import { EmployeeAuthData } from "../../models/employee";
import { EmployeeProfileDataObj } from "../../models/profile";
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

interface EmployeeLoginSuccessAction {
  type: EmployeeActionsTypes.EMPLOYEE_LOGIN_SUCCESS;
  payload: EmployeeAuthData;
}

interface GetEmployeeLoginVerificationFailAction {
  type: EmployeeActionsTypes.GET_OTP_VERIFICATION_FAIL;
  error: ErrorState[];
}

export type GetEmployeeLoginVerificationAction =
  | EmployeeLoginSuccessAction
  | GetEmployeeLoginVerificationRequestAction
  | GetEmployeeLoginVerificationSuccessAction
  | GetEmployeeLoginVerificationFailAction;

interface EmployeeLogoutSuccessAction {
  type: EmployeeActionsTypes.EMPLOYEE_LOGOUT_SUCCESS;
}
export type EmployeeLogoutAction = EmployeeLogoutSuccessAction;

interface GetMyProfileRequestAction {
  type: EmployeeActionsTypes.GET_MYPROFILE_REQUETS;
}

export interface GetMyProfileSuccessAction {
  type: EmployeeActionsTypes.GET_MYPROFILE_SUCCESS;
  payload: EmployeeProfileDataObj;
}

interface GetMyProfileFailAction {
  type: EmployeeActionsTypes.GET_MYPROFILE_FAIL;
  error: ErrorState[];
}

export type GetMyProfileAction =
  | GetMyProfileRequestAction
  | GetMyProfileSuccessAction
  | GetMyProfileFailAction;

interface SendbankDetailsSuccessAction {
  type: EmployeeActionsTypes.SENT_BANKDETAILS_SUCCESS;
}

interface SendbankDetailsRequestAction {
  type: EmployeeActionsTypes.SENT_BANKDETAILS_REQUETS;
}
interface SendbankDetailsFailAction {
  type: EmployeeActionsTypes.SENT_BANKDETAILS_FAIL;
  error: ErrorState[];
}

export type SendbankDetailsAction =
  | SendbankDetailsSuccessAction
  | SendbankDetailsRequestAction
  | SendbankDetailsFailAction;
