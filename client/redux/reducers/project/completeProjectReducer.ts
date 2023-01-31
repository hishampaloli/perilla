import { CompleteProjectState } from "../../../models/project";
import { CompleteProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";

export const addTeamToProjectsReducer = (
  state: CompleteProjectState = { loading: false, error: null },
  action: CompleteProjectsAction
): CompleteProjectState => {
  switch (action.type) {
    case ProjectActionsTypes.COMPLETE_PROJECTS_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case ProjectActionsTypes.GET_SINGLE_PROJECTS_SUCCESS:
      return {
        loading: false,
        error: null,
      };

    case ProjectActionsTypes.COMPLETE_PROJECTS_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
