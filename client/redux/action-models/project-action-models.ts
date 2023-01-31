import { ProjectDataArr, ProjectDataObj } from "../../models/project";
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

interface GetSingleProjectRequestAction {
  type: ProjectActionsTypes.GET_SINGLE_PROJECTS_REQUEST;
}

interface GetSingleProjectSuccessAction {
  type: ProjectActionsTypes.GET_SINGLE_PROJECTS_SUCCESS;
  payload: ProjectDataObj;
}

interface GetSingleProjectFailAction {
  type: ProjectActionsTypes.GET_SINGLE_PROJECTS_FAIL;
  error: ErrorState[];
}

export type GetSingleProjectAction =
  | GetSingleProjectRequestAction
  | GetSingleProjectSuccessAction
  | GetSingleProjectFailAction;

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

interface EditProjectsRequestAction {
  type: ProjectActionsTypes.EDIT_PROJECTS_REQUEST;
}

interface EditProjectsSuccessAction {
  type: ProjectActionsTypes.GET_SINGLE_PROJECTS_SUCCESS;
  payload: ProjectDataArr;
}

interface EditProjectsFailAction {
  type: ProjectActionsTypes.EDIT_PROJECTS_FAIL;
  error: ErrorState[];
}

export type EditProjectsAction =
  | EditProjectsRequestAction
  | EditProjectsSuccessAction
  | EditProjectsFailAction;

interface AddTeamToProjectsRequestAction {
  type: ProjectActionsTypes.ADD_TEAM_TO_PROJECTS_REQUEST;
}

interface AddTeamToProjectsSuccessAction {
  type: ProjectActionsTypes.GET_SINGLE_PROJECTS_SUCCESS;
  payload: ProjectDataArr;
}

interface AddTeamToProjectsFailAction {
  type: ProjectActionsTypes.ADD_TEAM_TO_PROJECTS_FAIL;
  error: ErrorState[];
}

export type AddTeamToProjectsAction =
  | AddTeamToProjectsRequestAction
  | AddTeamToProjectsSuccessAction
  | AddTeamToProjectsFailAction;

interface RemoveTeamFromProjectsRequestAction {
  type: ProjectActionsTypes.REMOVE_TEAM_FROM_PROJECTS_REQUEST;
}

interface RemoveTeamFromProjectsSuccessAction {
  type: ProjectActionsTypes.GET_SINGLE_PROJECTS_SUCCESS;
  payload: ProjectDataArr;
}

interface RemoveTeamFromProjectsFailAction {
  type: ProjectActionsTypes.REMOVE_TEAM_FROM_PROJECTS_FAIL;
  error: ErrorState[];
}

export type RemoveTeamFromProjectsAction =
  | RemoveTeamFromProjectsRequestAction
  | RemoveTeamFromProjectsSuccessAction
  | RemoveTeamFromProjectsFailAction;

interface CompleteProjectsRequestAction {
  type: ProjectActionsTypes.COMPLETE_PROJECTS_REQUEST;
}

interface CompleteProjectsSuccessAction {
  type: ProjectActionsTypes.GET_SINGLE_PROJECTS_SUCCESS;
  payload: ProjectDataArr;
}

interface CompleteProjectsFailAction {
  type: ProjectActionsTypes.COMPLETE_PROJECTS_FAIL;
  error: ErrorState[];
}

export type CompleteProjectsAction =
  | CompleteProjectsRequestAction
  | CompleteProjectsSuccessAction
  | CompleteProjectsFailAction;
