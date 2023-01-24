import {
  ErrorState,
  EmployeeData,
  AllEmployeesState,
  EmployeeDataArray,
  ClientDataArr,
  EmployeeDataObj,
} from "../../models/admin";

import { AdminActionsTypes } from "../constants/adminTypes";

interface GetAllEmployeesRequestAction {
  type: AdminActionsTypes.GET_ALL_EMPLOYEE_REQUEST;
}

interface GetAllEmployeesSuccessAction {
  type: AdminActionsTypes.GET_ALL_EMPLOYEE_SUCCESS;
  payload: EmployeeDataArray;
}

interface GetAllEmployeesFailAction {
  type: AdminActionsTypes.GET_ALL_EMPLOYEE_FAIL;
  error: ErrorState[];
}

export type GetAllEmployeeAction =
  | GetAllEmployeesRequestAction
  | GetAllEmployeesSuccessAction
  | GetAllEmployeesFailAction;

interface GetAllClientsRequestAction {
  type: AdminActionsTypes.GET_ALL_CLIENTS_REQUEST;
}

interface GetAllClientsSuccessAction {
  type: AdminActionsTypes.GET_ALL_CLIENTS_SUCCESS;
  payload: ClientDataArr;
}

interface GetAllClientsFailAction {
  type: AdminActionsTypes.GET_ALL_CLIENTS_FAIL;
  error: ErrorState[];
}

export type GetAllClientsAction =
  | GetAllClientsRequestAction
  | GetAllClientsSuccessAction
  | GetAllClientsFailAction;

interface AddEmployeeRequestAction {
  type: AdminActionsTypes.ADD_EMPLOYEE_REQUEST;
}

interface AddEmployeeFailAction {
  type: AdminActionsTypes.ADD_EMPLOYEE_FAIL;
  error: ErrorState[];
}

export type AddEmploteeAction =
  | AddEmployeeRequestAction
  | GetAllEmployeesSuccessAction
  | AddEmployeeFailAction;

interface AddClientRequestAction {
  type: AdminActionsTypes.ADD_CLIENT_REQUEST;
}

interface AddClientFailAction {
  type: AdminActionsTypes.ADD_CLIENT_FAIL;
  error: ErrorState[];
}

export type AddClientAction =
  | AddClientRequestAction
  | GetAllClientsSuccessAction
  | AddClientFailAction;

