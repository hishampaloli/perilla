import { ApproveTaskState } from "../../../models/project";
import { ApproveTaskAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";

export const approveTaskReducer = (
  state: ApproveTaskState = { loading: false, error: null },
  action: ApproveTaskAction
): ApproveTaskState => {
  switch (action.type) {
    case ProjectActionsTypes.APPROVE_TASK_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case ProjectActionsTypes.GET_SINGLE_TASK_SUCCESS:
      return {
        loading: false,
        error: null,
      };

    case ProjectActionsTypes.APPROVE_TASK_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
