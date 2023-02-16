import { GetAllJobsState } from "../../../models/job";
import { GetAllJobAction } from "../../action-models";
import { JobActionsTypes } from "../../constants/jobTypes";

export const getAllJobsReducer = (
  state: GetAllJobsState = { data: null, loading: false, error: null },
  action: GetAllJobAction
): GetAllJobsState => {
  switch (action.type) {
    case JobActionsTypes.GET_ALL_JOBS_REQUEST:
      return {
        loading: true,
        error: null,
        data: null,
      };

    case JobActionsTypes.GET_ALL_JOBS_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case JobActionsTypes.GET_ALL_JOBS_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
