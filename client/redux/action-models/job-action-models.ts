import {
  ApplicationArr,
  ApplicationObj,
  JobDataArr,
  JobDataObj,
} from "../../models/job";
import { ErrorState } from "../../models/tenants";
import { JobActionsTypes } from "../constants/jobTypes";

interface CreateJobRequestAction {
  type: JobActionsTypes.CREATE_JOB_REQUEST;
}

export interface CreateJobSuccessAction {
  type: JobActionsTypes.CREATE_JOB_SUCCESS;
  payload: JobDataObj;
}

export interface CreateJobFailAction {
  type: JobActionsTypes.CREATE_JOB_FAIL;
  error: ErrorState[];
}

export type CreateJobAction =
  | CreateJobRequestAction
  | CreateJobSuccessAction
  | CreateJobFailAction
  | GetAllJobSuccessAction;

interface GetAllJobRequestAction {
  type: JobActionsTypes.GET_ALL_JOBS_REQUEST;
}

export interface GetAllJobSuccessAction {
  type: JobActionsTypes.GET_ALL_JOBS_SUCCESS;
  payload: JobDataArr;
}

export interface GetAllJobFailAction {
  type: JobActionsTypes.GET_ALL_JOBS_FAIL;
  error: ErrorState[];
}

export type GetAllJobAction =
  | GetAllJobRequestAction
  | GetAllJobSuccessAction
  | GetAllJobFailAction;

interface GetSingleJobRequestAction {
  type: JobActionsTypes.GET_SINGLE_JOB_REQUEST;
}

export interface GetSingleJobSuccessAction {
  type: JobActionsTypes.GET_SINGLE_JOB_SUCCESS;
  payload: JobDataObj;
}

export interface GetSingleJobFailAction {
  type: JobActionsTypes.GET_SINGLE_JOB_FAIL;
  error: ErrorState[];
}

export type GetSingleJobAction =
  | GetSingleJobRequestAction
  | GetSingleJobSuccessAction
  | GetSingleJobFailAction;

interface EditJobRequestAction {
  type: JobActionsTypes.EDIT_JOB_REQUEST;
}

export interface EditJobSuccessAction {
  type: JobActionsTypes.EDIT_JOB_SUCCESS;
  payload: JobDataObj;
}

export interface EditJobFailAction {
  type: JobActionsTypes.EDIT_JOB_FAIL;
  error: ErrorState[];
}

export type EditJobAction =
  | EditJobRequestAction
  | EditJobFailAction
  | GetSingleJobSuccessAction
  | EditJobSuccessAction;

interface ApplyJobRequestAction {
  type: JobActionsTypes.APPLY_JOB_REQUEST;
}

export interface ApplyJobSuccessAction {
  type: JobActionsTypes.APPLY_JOB_SUCCESS;
  payload: JobDataObj;
}

export interface ApplyJobFailAction {
  type: JobActionsTypes.APPLY_JOB_FAIL;
  error: ErrorState[];
}

export type ApplyJobAction =
  | ApplyJobRequestAction
  | ApplyJobFailAction
  | ApplyJobSuccessAction;

interface GetAllApplicationsRequestAction {
  type: JobActionsTypes.ALL_APPLICATION_REQUEST;
}

export interface GetAllApplicationsSuccessAction {
  type: JobActionsTypes.ALL_APPLICATION_SUCCESS;
  payload: ApplicationArr;
}

export interface GetAllApplicationsFailAction {
  type: JobActionsTypes.ALL_APPLICATION_FAIL;
  error: ErrorState[];
}

export type GetAllApplicationsAction =
  | GetAllApplicationsRequestAction
  | GetAllApplicationsFailAction
  | GetAllApplicationsSuccessAction;

interface SingleApplicationRequestAction {
  type: JobActionsTypes.GET_SINGLE_APPLICATION_REQUEST;
}

export interface SingleApplicationSuccessAction {
  type: JobActionsTypes.GET_SINGLE_APPLICATION_SUCCESS;
  payload: ApplicationObj;
}

export interface SingleApplicationFailAction {
  type: JobActionsTypes.GET_SINGLE_APPLICATION_FAIL;
  error: ErrorState[];
}

export type SingleApplicationAction =
  | SingleApplicationRequestAction
  | SingleApplicationFailAction
  | SingleApplicationSuccessAction;

interface ChangeApplicationStatusRequestAction {
  type: JobActionsTypes.CHANGE_APPLICATION_STATUS_REQUEST;
}

export interface ChangeApplicationStatusSuccessAction {
  type: JobActionsTypes.CHANGE_APPLICATION_STATUS_SUCCESS;
  payload: ApplicationObj;
}

export interface ChangeApplicationStatusFailAction {
  type: JobActionsTypes.CHANGE_APPLICATION_STATUS_FAIL;
  error: ErrorState[];
}

export type ChangeApplicationStatusAction =
  | ChangeApplicationStatusRequestAction
  | ChangeApplicationStatusFailAction
  | ChangeApplicationStatusSuccessAction
  | SingleApplicationSuccessAction;
