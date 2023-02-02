import { AddTaskState } from "../../../models/project";
import { AddTaskAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";

export const addTaskReducer = (
  state: AddTaskState = { loading: false, error: null },
  action: AddTaskAction
): AddTaskState => {
  switch (action.type) {
    case ProjectActionsTypes.ADD_TASK_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case ProjectActionsTypes.GET_TASKS_UNDER_PROJECTS_SUCCESS:
      return {
        loading: false,
        error: null,
      };

    case ProjectActionsTypes.ADD_TASK_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
