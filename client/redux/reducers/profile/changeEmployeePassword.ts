import { ChangeEmployeePasswordState } from "../../../models/profile";
import { ChangeEmployeePasswordAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";

export const ChangeEmployeePasswordReducer = (
  state: ChangeEmployeePasswordState = { loading: false, error: null },
  action: ChangeEmployeePasswordAction
): ChangeEmployeePasswordState => {
  switch (action.type) {
    case ProfileActionsTypes.CHANGE_EMPLOYEE_PASSWORD_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case ProfileActionsTypes.CHANGE_EMPLOYEE_PASSWORD_SUCCESS:
      return {
        error: null,
        loading: false,
      };

    case ProfileActionsTypes.CHANGE_EMPLOYEE_PASSWORD_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
