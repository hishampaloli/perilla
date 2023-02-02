import { EditTaskState } from "../../../models/project";
import { EditTasksAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";

export const editTaskReducer = (
  state: EditTaskState = { loading: false, error: null },
  action: EditTasksAction
): EditTaskState => {
  switch (action.type) {
    case ProjectActionsTypes.EDIT_TASKS_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case ProjectActionsTypes.GET_SINGLE_TASK_SUCCESS:
      return {
        loading: false,
        error: null,
      };

    case ProjectActionsTypes.EDIT_TASKS_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
