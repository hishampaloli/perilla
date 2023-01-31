import { GetSingleProjectState } from "../../../models/project";
import { GetSingleProjectAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";

export const getSingleProjectsReducer = (
  state: GetSingleProjectState = { data: null, loading: false, error: null },
  action: GetSingleProjectAction
): GetSingleProjectState => {
  switch (action.type) {
    case ProjectActionsTypes.GET_SINGLE_PROJECTS_REQUEST:
      return {
        data: null,
        loading: true,
        error: null,
      };

    case ProjectActionsTypes.GET_SINGLE_PROJECTS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };

    case ProjectActionsTypes.GET_SINGLE_PROJECTS_FAIL:
      return {
        data: null,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
