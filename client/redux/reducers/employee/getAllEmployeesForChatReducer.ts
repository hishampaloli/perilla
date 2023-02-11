import { GetAllEmployeesForChatState } from "../../../models/employee";
import { GetAllEmployeesForChatAction } from "../../action-models";
import { EmployeeActionsTypes } from "../../constants";

export const getAllEmployeeForChatReducer = (
  state: GetAllEmployeesForChatState = {
    data: null,
    loading: false,
    error: null,
  },
  action: GetAllEmployeesForChatAction
): GetAllEmployeesForChatState => {
  switch (action.type) {
    case EmployeeActionsTypes.GET_ALL_EMPLOYEES_FOR_CHAT_REQUEST:
      return {
        loading: true,
        error: null,
        data: null,
      };

    case EmployeeActionsTypes.GET_ALL_EMPLOYEES_FOR_CHAT_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case EmployeeActionsTypes.GET_ALL_EMPLOYEES_FOR_CHAT_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
