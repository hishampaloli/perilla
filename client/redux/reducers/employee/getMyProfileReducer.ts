import { GetMyProfileState } from "../../../models/employee";
import { GetMyProfileAction } from "../../action-models";
import { EmployeeActionsTypes } from "../../constants";

export const getMyProfileReducer = (
  state: GetMyProfileState = { data: null, loading: false, error: null },
  action: GetMyProfileAction
): GetMyProfileState => {

  switch (action.type) {
    case EmployeeActionsTypes.GET_MYPROFILE_REQUETS:
      return {
        loading: true,
        data: null,
        error: null,
      };

    case EmployeeActionsTypes.GET_MYPROFILE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };

    case EmployeeActionsTypes.GET_MYPROFILE_FAIL:
      return {
        loading: false,
        data: null,
        error: action.error,
      };

    default:
      return state;
  }
};
