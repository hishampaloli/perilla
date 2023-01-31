import { EditProjectState } from "../../../models/project";
import { EditProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";

export const editProjectsReducer = (
  state: EditProjectState = { loading: false, error: null },
  action: EditProjectsAction
): EditProjectState => {
  switch (action.type) {
    case ProjectActionsTypes.EDIT_PROJECTS_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case ProjectActionsTypes.GET_SINGLE_PROJECTS_SUCCESS:
      return {
        loading: false,
        error: null,
      };

    case ProjectActionsTypes.EDIT_PROJECTS_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
