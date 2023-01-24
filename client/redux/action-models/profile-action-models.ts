import { CLientDataObj } from "../../models/admin";
import { EmployeeProfileDataObj } from "../../models/profile";
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
