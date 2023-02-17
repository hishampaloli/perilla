import { EditJobState } from "../../../models/job";
import { EditJobAction } from "../../action-models";
import { JobActionsTypes } from "../../constants/jobTypes";

export const editJobReducer = (
  state: EditJobState = { loading: false, error: null },
  action: EditJobAction
): EditJobState => {
  switch (action.type) {
    case JobActionsTypes.EDIT_JOB_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case JobActionsTypes.EDIT_JOB_SUCCESS:
      return {
        error: null,
        loading: false,
      };

    case JobActionsTypes.EDIT_JOB_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
