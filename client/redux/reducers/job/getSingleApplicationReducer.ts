import { GetSingleApplicationState } from "../../../models/job";
import { SingleApplicationAction } from "../../action-models";
import { JobActionsTypes } from "../../constants/jobTypes";

export const getSingleApplicationReducer = (
  state: GetSingleApplicationState = { data: null, loading: false, error: null },
  action: SingleApplicationAction
): GetSingleApplicationState => {
  switch (action.type) {
    case JobActionsTypes.GET_SINGLE_APPLICATION_REQUEST:
      return {
        loading: true,
        error: null,
        data: null,
      };

    case JobActionsTypes.GET_SINGLE_APPLICATION_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case JobActionsTypes.GET_SINGLE_APPLICATION_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
