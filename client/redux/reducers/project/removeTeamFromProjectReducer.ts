import { RemoveTeamFromProjectState } from "../../../models/project";
import { RemoveTeamFromProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";

export const removeTeamFromProjectsReducer = (
  state: RemoveTeamFromProjectState = { loading: false, error: null },
  action: RemoveTeamFromProjectsAction
): RemoveTeamFromProjectState => {
  switch (action.type) {
    case ProjectActionsTypes.REMOVE_TEAM_FROM_PROJECTS_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case ProjectActionsTypes.GET_SINGLE_PROJECTS_SUCCESS:
      return {
        loading: false,
        error: null,
      };

    case ProjectActionsTypes.REMOVE_TEAM_FROM_PROJECTS_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
