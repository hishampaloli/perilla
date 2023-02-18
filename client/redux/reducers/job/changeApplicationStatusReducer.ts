import { changeApplicationStatusState } from "../../../models/job";
import { ChangeApplicationStatusAction } from "../../action-models";
import { JobActionsTypes } from "../../constants/jobTypes";

export const changeJobApplicationReducer = (
  state: changeApplicationStatusState = {
    data: null,
    loading: false,
    error: null,
  },
  action: ChangeApplicationStatusAction
): changeApplicationStatusState => {
  switch (action.type) {
    case JobActionsTypes.CHANGE_APPLICATION_STATUS_REQUEST:
      return {
        loading: true,
        error: null,
        data: null,
      };

    case JobActionsTypes.CHANGE_APPLICATION_STATUS_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case JobActionsTypes.CHANGE_APPLICATION_STATUS_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
