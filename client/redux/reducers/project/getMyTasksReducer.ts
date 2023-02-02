import { GetMyTasksState } from "../../../models/project";
import { GetMyTasksAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";

export const getMyTasksReducer = (
  state: GetMyTasksState = { data: null, loading: false, error: null },
  action: GetMyTasksAction
): GetMyTasksState => {
  switch (action.type) {
    case ProjectActionsTypes.GET_MY_TASKS_REQUEST:
      return {
        data: null,
        loading: true,
        error: null,
      };

    case ProjectActionsTypes.GET_MY_TASKS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };

    case ProjectActionsTypes.GET_MY_TASKS_FAIL:
      return {
        data: null,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
