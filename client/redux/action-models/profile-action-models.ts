import { type } from "os";
import { CLientDataObj } from "../../models/admin";
import {
  BankDetailsArr,
  EmployeeProfileDataObj,
  NotificationDataArr,
} from "../../models/profile";
import { ErrorState } from "../../models/tenants";
import { ProfileActionsTypes } from "../constants";
import { GetMyProfileSuccessAction } from "./employee-action-model";

interface GetEmployeeProfileRequestAction {
  type: ProfileActionsTypes.GET_EMPLOYEE_PROFILE_REQUETS;
}

export interface GetEmployeeProfileSuccessAction {
  type: ProfileActionsTypes.GET_EMPLOYEE_PROFILE_SUCCESS;
  payload: EmployeeProfileDataObj;
}

interface GetEmployeeProfileFailAction {
  type: ProfileActionsTypes.GET_EMPLOYEE_PROFILE_FAIL;
  error: ErrorState[];
}

export type GetEmployeeProfileAction =
  | GetEmployeeProfileRequestAction
  | GetEmployeeProfileSuccessAction
  | GetEmployeeProfileFailAction;

interface GetClientProfileRequestAction {
  type: ProfileActionsTypes.GET_CLIENT_PROFILE_REQUETS;
}

interface GetClientProfileSuccessAction {
  type: ProfileActionsTypes.GET_CLIENT_PROFILE_SUCCESS;
  payload: CLientDataObj;
}

interface GetClientProfileFailAction {
  type: ProfileActionsTypes.GET_CLIENT_PROFILE_FAIL;
  error: ErrorState[];
}

export type GetClientProfileAction =
  | GetClientProfileRequestAction
  | GetClientProfileSuccessAction
  | GetClientProfileFailAction;

interface EditEmployeeProfileRequest {
  type: ProfileActionsTypes.EDIT_EMPLOYEE_PROFILE_REQUETS;
}
interface EditEmployeeProfileSuccess {
  type: ProfileActionsTypes.EDIT_EMPLOYEE_PROFILE_SUCCESS;
}

interface EditEmployeeProfileFail {
  type: ProfileActionsTypes.EDIT_EMPLOYEE_PROFILE_FAIL;
  error: ErrorState[];
}

export type EditEmployeeProfileAction =
  | EditEmployeeProfileRequest
  | EditEmployeeProfileSuccess
  | GetEmployeeProfileSuccessAction
  | EditEmployeeProfileFail;

interface EditClientRequestAction {
  type: ProfileActionsTypes.EDIT_CLIENT_PROFILE_REQUETS;
}

interface EditClientFailAction {
  type: ProfileActionsTypes.EDIT_CLIENT_PROFILE_FAIL;
  error: ErrorState[];
}

export type EditClientAction =
  | EditClientFailAction
  | EditClientRequestAction
  | GetClientProfileSuccessAction;

interface RemoveEmployeeRequestAction {
  type: ProfileActionsTypes.REMOVE_EMPLOYEE_PROFILE_REQUETS;
}

interface RemoveEmployeeFailAction {
  type: ProfileActionsTypes.REMOVE_EMPLOYEE_PROFILE_FAIL;
  error: ErrorState[];
}

export type RemoveEmployeeAction =
  | RemoveEmployeeFailAction
  | RemoveEmployeeRequestAction
  | GetEmployeeProfileSuccessAction;

interface ChangeEmployeePasswordRequestAction {
  type: ProfileActionsTypes.CHANGE_EMPLOYEE_PASSWORD_REQUEST;
}

interface ChangeEmployeePasswordSuccessAction {
  type: ProfileActionsTypes.CHANGE_EMPLOYEE_PASSWORD_SUCCESS;
}

interface ChangeEmployeePasswordFailAction {
  type: ProfileActionsTypes.CHANGE_EMPLOYEE_PASSWORD_FAIL;
  error: ErrorState[];
}

export type ChangeEmployeePasswordAction =
  | ChangeEmployeePasswordRequestAction
  | ChangeEmployeePasswordSuccessAction
  | ChangeEmployeePasswordFailAction;

interface EditSalaryDetailsRequestAction {
  type: ProfileActionsTypes.EDIT_SALARY_DETAILS_REQUETS;
}

interface EditSalaryDetailsFailAction {
  type: ProfileActionsTypes.EDIT_SALARY_DETAILS_FAIL;
  error: ErrorState[];
}

export type EditSalaryDetailsAction =
  | EditSalaryDetailsFailAction
  | GetEmployeeProfileSuccessAction
  | EditSalaryDetailsRequestAction;

interface EditBankDetailsRequestAction {
  type: ProfileActionsTypes.EDIT_BANK_DETAILS_REQUETS;
}

interface EditBankDetailsSuccessAction {
  type: ProfileActionsTypes.EDIT_BANK_DETAILS_SUCCESS;
}

interface EditBankDetailsFailAction {
  type: ProfileActionsTypes.EDIT_BANK_DETAILS_FAIL;
  error: ErrorState[];
}

export type EditBankDetailsAction =
  | EditBankDetailsRequestAction
  | EditBankDetailsSuccessAction
  | GetMyProfileSuccessAction
  | EditBankDetailsFailAction;

interface EditPersonalInfoRequestAction {
  type: ProfileActionsTypes.EDIT_PERSONALINFO_REQUETS;
}

interface EditPersonalInfoSuccessAction {
  type: ProfileActionsTypes.EDIT_PERSONALINFO_SUCCESS;
}

interface EditPersonalInfoFailAction {
  type: ProfileActionsTypes.EDIT_PERSONALINFO_FAIL;
  error: ErrorState[];
}

export type EditPersonalInfoAction =
  | EditPersonalInfoRequestAction
  | EditPersonalInfoSuccessAction
  | GetMyProfileSuccessAction
  | EditPersonalInfoFailAction;

interface EditEmergencyContactRequestAction {
  type: ProfileActionsTypes.EDIT_EMERGENCY_CONTACT_REQUETS;
}

interface EditEmergencyContactSuccessAction {
  type: ProfileActionsTypes.EDIT_EMERGENCY_CONTACT_SUCCESS;
}

interface EditEmergencyContactFailAction {
  type: ProfileActionsTypes.EDIT_EMERGENCY_CONTACT_FAIL;
  error: ErrorState[];
}

export type EditEmergencyContactAction =
  | EditEmergencyContactRequestAction
  | EditEmergencyContactSuccessAction
  | GetMyProfileSuccessAction
  | EditEmergencyContactFailAction;

interface GetNotificationSuccessAction {
  type: ProfileActionsTypes.GET_MY_NOTIFICATIONS_SUCCESS;
  payload: NotificationDataArr;
}

interface GetNotificationRequestAction {
  type: ProfileActionsTypes.GET_MY_NOTIFICATIONS_REQUETS;
}

interface GetNotificationFailAction {
  type: ProfileActionsTypes.GET_MY_NOTIFICATIONS_FAIL;
  error: ErrorState[];
}

export type GetNotificationAction =
  | GetNotificationSuccessAction
  | GetNotificationRequestAction
  | GetNotificationFailAction;

interface DeleteNotificationSuccessAction {
  type: ProfileActionsTypes.DELETE_MY_NOTIFICATIONS_SUCCESS;
}

interface DeleteNotificationRequestAction {
  type: ProfileActionsTypes.DELETE_MY_NOTIFICATIONS_REQUETS;
}

interface DeleteNotificationFailAction {
  type: ProfileActionsTypes.DELETE_MY_NOTIFICATIONS_FAIL;
  error: ErrorState[];
}

export type DeleteNotificationAction =
  | DeleteNotificationSuccessAction
  | DeleteNotificationRequestAction
  | GetNotificationSuccessAction
  | DeleteNotificationFailAction;
