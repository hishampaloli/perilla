import { AddEmployeesState } from "../../../models/admin";
import { AddEmploteeAction } from "../../action-models";
import { AdminActionsTypes } from "../../constants";

export const addEmployeeReducer = (
  state: AddEmployeesState = { data: null, loading: false, error: null },
  action: AddEmploteeAction
): AddEmployeesState => {
  switch (action.type) {
    case AdminActionsTypes.ADD_EMPLOYEE_REQUEST:
      return {
        loading: true,
        data: null,
        error: null,
      };

    case AdminActionsTypes.ADD_EMPLOYEE_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
