import { type } from "os";
import { CLientDataObj } from "../../models/admin";
import { BankDetailsArr, EmployeeProfileDataObj } from "../../models/profile";
import { ErrorState } from "../../models/tenants";
import { ProfileActionsTypes } from "../constants";

interface GetEmployeeProfileRequestAction {
  type: ProfileActionsTypes.GET_EMPLOYEE_PROFILE_REQUETS;
}

interface GetEmployeeProfileSuccessAction {
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

interface GetAllBankDetailsReqRequestAction {
  type: ProfileActionsTypes.GET_ALL_BANK_DETAILS_REQUETS;
}

interface GetAllBankDetailsReqSuccessAction {
  type: ProfileActionsTypes.GET_ALL_BANK_DETAILS_SUCCESS;
  payload: BankDetailsArr;
}

interface GetAllBankDetailsReqFailAction {
  type: ProfileActionsTypes.GET_ALL_BANK_DETAILS_FAIL;
  error: ErrorState[];
}

export type GetAllBankDetailsReqAction =
  | GetAllBankDetailsReqRequestAction
  | GetAllBankDetailsReqFailAction
  | GetAllBankDetailsReqSuccessAction;
