import { JobDataArr, JobDataObj } from "../../models/job";
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
