import { EditEmployeeProfileState } from "../../../models/profile";
import { EditEmployeeProfileAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";

export const EditEmployeeProfileReducer = (
  state: EditEmployeeProfileState = { loading: false, error: null },
  action: EditEmployeeProfileAction
): EditEmployeeProfileState => {
  switch (action.type) {
    case ProfileActionsTypes.EDIT_EMPLOYEE_PROFILE_REQUETS:
      return {
        loading: true,
        error: null,
      };

    case ProfileActionsTypes.EDIT_EMPLOYEE_PROFILE_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    case ProfileActionsTypes.EDIT_EMPLOYEE_PROFILE_SUCCESS:
      return {
        error: null,
        loading: false,
      };

    default:
      return state;
  }
};
