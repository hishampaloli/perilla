import { CreateProjectsState } from "../../../models/project";
import { CreateProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";

export const createProjectsReducer = (
  state: CreateProjectsState = { loading: false, error: null },
  action: CreateProjectsAction
): CreateProjectsState => {
  switch (action.type) {
    case ProjectActionsTypes.CREATE_PROJECTS_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case ProjectActionsTypes.GET_ALL_PROJECTS_SUCCESS:
      return {
        loading: false,
        error: null,
      };

    case ProjectActionsTypes.CREATE_PROJECTS_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
