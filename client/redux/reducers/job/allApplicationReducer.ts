import { AllApplicationsState } from "../../../models/job";
import { GetAllApplicationsAction } from "../../action-models";
import { JobActionsTypes } from "../../constants/jobTypes";

export const getAllApplicationReducer = (
  state: AllApplicationsState = { data: null, loading: false, error: null },
  action: GetAllApplicationsAction
): AllApplicationsState => {
  switch (action.type) {
    case JobActionsTypes.ALL_APPLICATION_REQUEST:
      return {
        loading: true,
        error: null,
        data: null,
      };

    case JobActionsTypes.ALL_APPLICATION_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case JobActionsTypes.ALL_APPLICATION_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
