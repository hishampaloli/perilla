import { ApplyJobState } from "../../../models/job";
import { ApplyJobAction } from "../../action-models";
import { JobActionsTypes } from "../../constants/jobTypes";

export const applyJobReducer = (
  state: ApplyJobState = { loading: false, error: null },
  action: ApplyJobAction
): ApplyJobState => {
  switch (action.type) {
    case JobActionsTypes.APPLY_JOB_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case JobActionsTypes.APPLY_JOB_SUCCESS:
      return {
        error: null,
        loading: false,
      };

    case JobActionsTypes.APPLY_JOB_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
