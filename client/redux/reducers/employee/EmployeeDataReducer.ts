import { EmployeeAuthState, EmployeeAuthData } from "../../../models/employee";

import { EmployeeActionsTypes } from "../../constants";

let employeeDatas: EmployeeAuthData;

if (typeof window !== "undefined") {
  const userInfoFromStorage: EmployeeAuthData = localStorage.getItem(
    "employeeInfo"
  )
    ? JSON.parse(localStorage.getItem("employeeInfo")!)
    : null;
  employeeDatas = userInfoFromStorage;
}

export const employeeReducer = (
  state: EmployeeAuthState = { data: employeeDatas, error: null },
  action: any
): any => {
  switch (action.type) {
    case EmployeeActionsTypes.EMPLOYEE_LOGIN_SUCCESS:
      return {
        error: null,
        data: action.payload,
      };

    case EmployeeActionsTypes.EMPLOYEE_LOGOUT_SUCCESS:
      return {
        error: null,
        data: null,
      };

    default:
      return state;
  }
};
