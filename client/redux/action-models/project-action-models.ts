import {
  ProjectDataArr,
  ProjectDataObj,
  TaskDataArr,
  TaskDataObj,
} from "../../models/project";
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

interface GetMyProjectsRequestAction {
  type: ProjectActionsTypes.GET_MY_PROJECTS_REQUEST;
}

interface GetMyProjectsSuccessAction {
  type: ProjectActionsTypes.GET_MY_PROJECTS_SUCCESS;
  payload: ProjectDataArr;
}

interface GetMyProjectsFailAction {
  type: ProjectActionsTypes.GET_MY_PROJECTS_FAIL;
  error: ErrorState[];
}

export type GetMyProjectsAction =
  | GetMyProjectsRequestAction
  | GetMyProjectsSuccessAction
  | GetMyProjectsFailAction;

interface GetTaskUnderProjectsRequestAction {
  type: ProjectActionsTypes.GET_TASKS_UNDER_PROJECTS_REQUEST;
}

interface GetTaskUnderProjectsSuccessAction {
  type: ProjectActionsTypes.GET_TASKS_UNDER_PROJECTS_SUCCESS;
  payload: TaskDataArr;
}

interface GetTaskUnderProjectsFailAction {
  type: ProjectActionsTypes.GET_TASKS_UNDER_PROJECTS_FAIL;
  error: ErrorState[];
}

export type GetTaskUnderProjectsAction =
  | GetTaskUnderProjectsRequestAction
  | GetTaskUnderProjectsSuccessAction
  | GetTaskUnderProjectsFailAction;

interface AddTaskRequestAction {
  type: ProjectActionsTypes.ADD_TASK_REQUEST;
}

interface AddTaskSuccessAction {
  type: ProjectActionsTypes.GET_TASKS_UNDER_PROJECTS_SUCCESS;
  payload: TaskDataArr;
}

interface AddTaskFailAction {
  type: ProjectActionsTypes.ADD_TASK_FAIL;
  error: ErrorState[];
}

export type AddTaskAction =
  | AddTaskRequestAction
  | AddTaskSuccessAction
  | AddTaskFailAction;

interface GetSingleTaskRequestAction {
  type: ProjectActionsTypes.GET_SINGLE_TASK_REQUEST;
}

interface GetSingleTaskSuccessAction {
  type: ProjectActionsTypes.GET_SINGLE_TASK_SUCCESS;
  payload: TaskDataObj;
}

interface GetSingleTaskFailAction {
  type: ProjectActionsTypes.GET_SINGLE_TASK_FAIL;
  error: ErrorState[];
}

export type GetSingleTaskAction =
  | GetSingleTaskRequestAction
  | GetSingleTaskSuccessAction
  | GetSingleTaskFailAction;

interface ApproveTaskRequestAction {
  type: ProjectActionsTypes.APPROVE_TASK_REQUEST;
}

interface ApproveTaskSuccessAction {
  type: ProjectActionsTypes.GET_SINGLE_TASK_SUCCESS;
  payload: TaskDataObj;
}

interface ApproveTaskFailAction {
  type: ProjectActionsTypes.APPROVE_TASK_FAIL;
  error: ErrorState[];
}

export type ApproveTaskAction =
  | ApproveTaskRequestAction
  | ApproveTaskSuccessAction
  | ApproveTaskFailAction;

interface ReqTaskApprovalRequestAction {
  type: ProjectActionsTypes.REQ_TASK_APPROVAL_REQUEST;
}

interface ReqTaskApprovalSuccessAction {
  type: ProjectActionsTypes.GET_SINGLE_TASK_SUCCESS;
  payload: TaskDataObj;
}

interface ReqTaskApprovalFailAction {
  type: ProjectActionsTypes.REQ_TASK_APPROVAL_FAIL;
  error: ErrorState[];
}

export type ReqTaskApprovalAction =
  | ReqTaskApprovalRequestAction
  | ReqTaskApprovalSuccessAction
  | ReqTaskApprovalFailAction;

interface GetMyTasksRequestAction {
  type: ProjectActionsTypes.GET_MY_TASKS_REQUEST;
}

interface GetMyTasksSuccessAction {
  type: ProjectActionsTypes.GET_MY_TASKS_SUCCESS;
  payload: TaskDataArr;
}

interface GetMyTasksFailAction {
  type: ProjectActionsTypes.GET_MY_TASKS_FAIL;
  error: ErrorState[];
}

export type GetMyTasksAction =
  | GetMyTasksRequestAction
  | GetMyTasksSuccessAction
  | GetMyTasksFailAction;
