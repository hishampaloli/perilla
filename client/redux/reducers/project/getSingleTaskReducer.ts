import { GetSingleTaskState } from "../../../models/project";
import { GetSingleTaskAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";

export const getSingleTaskReducer = (
  state: GetSingleTaskState = { data: null, loading: false, error: null },
  action: GetSingleTaskAction
): GetSingleTaskState => {
  switch (action.type) {
    case ProjectActionsTypes.GET_SINGLE_TASK_REQUEST:
      return {
        data: null,
        loading: true,
        error: null,
      };

    case ProjectActionsTypes.GET_SINGLE_TASK_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };

    case ProjectActionsTypes.GET_SINGLE_TASK_FAIL:
      return {
        data: null,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
