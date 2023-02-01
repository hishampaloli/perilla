import { GetAllTaskUnderProjectState } from "../../../models/project";
import { GetTaskUnderProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";

export const getTaskUnderProjectsReducer = (
  state: GetAllTaskUnderProjectState = {
    data: null,
    loading: false,
    error: null,
  },
  action: GetTaskUnderProjectsAction
): GetAllTaskUnderProjectState => {
  switch (action.type) {
    case ProjectActionsTypes.GET_TASKS_UNDER_PROJECTS_REQUEST:
      return {
        data: null,
        loading: true,
        error: null,
      };

    case ProjectActionsTypes.GET_TASKS_UNDER_PROJECTS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };

    case ProjectActionsTypes.GET_TASKS_UNDER_PROJECTS_FAIL:
      return {
        data: null,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
