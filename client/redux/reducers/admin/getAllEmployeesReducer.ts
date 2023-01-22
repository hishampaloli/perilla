import { AllEmployeesState } from "../../../models/admin";
import { GetAllEmployeeAction } from "../../action-models";
import { AdminActionsTypes } from "../../constants";

export const getAllEmployeesReducer = (
  state: AllEmployeesState = { data: null, loading: false, error: null },
  action: GetAllEmployeeAction
): AllEmployeesState => {
  switch (action.type) {
    case AdminActionsTypes.GET_ALL_EMPLOYEE_REQUEST:
      return {
        loading: true,
        data: null,
        error: null,
      };

    case AdminActionsTypes.GET_ALL_EMPLOYEE_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case AdminActionsTypes.GET_ALL_EMPLOYEE_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
