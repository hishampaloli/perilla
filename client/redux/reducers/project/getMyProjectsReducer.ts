import { GetMyProjectsState } from "../../../models/project";
import { GetMyProjectsAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";

export const getMyProjectsReducer = (
  state: GetMyProjectsState = { data: null, loading: false, error: null },
  action: GetMyProjectsAction
): GetMyProjectsState => {
  switch (action.type) {
    case ProjectActionsTypes.GET_MY_PROJECTS_REQUEST:
      return {
        data: null,
        loading: true,
        error: null,
      };

    case ProjectActionsTypes.GET_MY_PROJECTS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };

    case ProjectActionsTypes.GET_MY_PROJECTS_FAIL:
      return {
        data: null,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
