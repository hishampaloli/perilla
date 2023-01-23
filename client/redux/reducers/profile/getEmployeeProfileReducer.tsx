import { GetEmployeeProfileState } from "../../../models/profile";
import { GetEmployeeProfileAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";

export const getEmployeeProfileReducer = (
  state: GetEmployeeProfileState = { data: null, loading: false, error: null },
  action: GetEmployeeProfileAction
): GetEmployeeProfileState => {
  switch (action.type) {
    case ProfileActionsTypes.GET_EMPLOYEE_PROFILE_REQUETS:
      return {
        loading: true,
        data: null,
        error: null,
      };

    case ProfileActionsTypes.GET_EMPLOYEE_PROFILE_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case ProfileActionsTypes.GET_EMPLOYEE_PROFILE_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
