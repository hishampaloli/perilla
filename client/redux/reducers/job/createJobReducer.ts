import { PostJobState } from "../../../models/job";
import { CreateJobAction } from "../../action-models";
import { JobActionsTypes } from "../../constants/jobTypes";

export const createJobReducer = (
  state: PostJobState = { data: null, loading: false, error: null },
  action: CreateJobAction
): PostJobState => {
  switch (action.type) {
    case JobActionsTypes.CREATE_JOB_REQUEST:
      return {
        loading: true,
        error: null,
        data: null,
      };

    case JobActionsTypes.CREATE_JOB_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case JobActionsTypes.CREATE_JOB_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
