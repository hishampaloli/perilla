import { GetSingleJobState } from "../../../models/job";
import { GetSingleJobAction } from "../../action-models";
import { JobActionsTypes } from "../../constants/jobTypes";

export const getSingleJobReducer = (
  state: GetSingleJobState = { data: null, loading: false, error: null },
  action: GetSingleJobAction
): GetSingleJobState => {
  switch (action.type) {
    case JobActionsTypes.GET_SINGLE_JOB_REQUEST:
      return {
        loading: true,
        error: null,
        data: null,
      };

    case JobActionsTypes.GET_SINGLE_JOB_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case JobActionsTypes.GET_SINGLE_JOB_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
