import { AddTeamToProjectState } from "../../../models/project";
import { AddTeamToProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";

export const addTeamToProjectsReducer = (
  state: AddTeamToProjectState = { loading: false, error: null },
  action: AddTeamToProjectsAction
): AddTeamToProjectState => {
  switch (action.type) {
    case ProjectActionsTypes.ADD_TEAM_TO_PROJECTS_REQUEST:
      return { loading: true, error: null };

    case ProjectActionsTypes.GET_SINGLE_PROJECTS_SUCCESS:
      return { loading: false, error: null };

    case ProjectActionsTypes.ADD_TEAM_TO_PROJECTS_FAIL:
      return { loading: false, error: action.error };

    default:
      return state;
  }
};
