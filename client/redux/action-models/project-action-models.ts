import { ProjectDataArr } from "../../models/project";
import { ErrorState } from "../../models/tenants";
import { ProjectActionsTypes } from "../constants";

interface GetAllProjectsRequestAction {
  type: ProjectActionsTypes.GET_ALL_PROJECTS_REQUEST;
}

interface GetAllProjectsSuccessAction {
  type: ProjectActionsTypes.GET_ALL_PROJECTS_SUCCESS;
  payload: ProjectDataArr;
}

interface GetAllProjectsFailAction {
  type: ProjectActionsTypes.GET_ALL_PROJECTS_FAIL;
  error: ErrorState[];
}

export type GetAllProjectsAction =
  | GetAllProjectsRequestAction
  | GetAllProjectsSuccessAction
  | GetAllProjectsFailAction;

interface CreateProjectsRequestAction {
  type: ProjectActionsTypes.CREATE_PROJECTS_REQUEST;
}

interface CreateProjectsSuccessAction {
  type: ProjectActionsTypes.GET_ALL_PROJECTS_SUCCESS;
  payload: ProjectDataArr;
}

interface CreateProjectsFailAction {
  type: ProjectActionsTypes.CREATE_PROJECTS_FAIL;
  error: ErrorState[];
}

export type CreateProjectsAction =
  | CreateProjectsRequestAction
  | CreateProjectsSuccessAction
  | CreateProjectsFailAction;
