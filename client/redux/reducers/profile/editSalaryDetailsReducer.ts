import { EditSalaryDetailsState } from "../../../models/profile";
import { EditSalaryDetailsAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";

export const EditSalaryDetails = (
  state: EditSalaryDetailsState = { loading: false, error: null },
  action: EditSalaryDetailsAction
): EditSalaryDetailsState => {
  switch (action.type) {
    case ProfileActionsTypes.EDIT_SALARY_DETAILS_REQUETS:
      return {
        loading: true,
        error: null,
      };

    case ProfileActionsTypes.GET_EMPLOYEE_PROFILE_SUCCESS:
      return {
        error: null,
        loading: false,
      };

    case ProfileActionsTypes.EDIT_SALARY_DETAILS_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
