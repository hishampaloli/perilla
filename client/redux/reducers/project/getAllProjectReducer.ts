import { GetAllProjectsState } from "../../../models/project";
import { GetAllProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";

export const getAllProjectsReducer = (
  state: GetAllProjectsState = { data: null, loading: false, error: null },
  action: GetAllProjectsAction
): GetAllProjectsState => {
  switch (action.type) {
    case ProjectActionsTypes.GET_ALL_PROJECTS_REQUEST:
      return {
        data: null,
        loading: true,
        error: null,
      };

    case ProjectActionsTypes.GET_ALL_PROJECTS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };

    case ProjectActionsTypes.GET_ALL_PROJECTS_FAIL:
      return {
        data: null,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
