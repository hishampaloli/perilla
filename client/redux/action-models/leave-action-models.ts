import { LeaveDataArr, LeaveDataObj } from "../../models/Leave";
import { ErrorState } from "../../models/tenants";
import { LeaveActionTypes } from "../constants/leaveTypes";

interface GetLeaveReqRequestAction {
  type: LeaveActionTypes.GET_LEAVE_REQUEST_REQUEST;
}

export interface GetLeaveReqSuccessAction {
  type: LeaveActionTypes.GET_LEAVE_REQUEST_SUCCESS;
  payload: LeaveDataArr;
}

export interface GetLeaveReqFailAction {
  type: LeaveActionTypes.GET_LEAVE_REQUEST_FAIL;
  error: ErrorState[];
}

export type GetLeaveReqAction =
  | GetLeaveReqRequestAction
  | GetLeaveReqSuccessAction
  | GetLeaveReqFailAction;

interface ViewSingleLeaveRequestAction {
  type: LeaveActionTypes.VIEW_SINGLE_LEAVE_REQUEST;
}

interface ViewSingleLeaveSuccessAction {
  type: LeaveActionTypes.VIEW_SINGLE_LEAVE_SUCCESS;
  payload: LeaveDataObj;
}

interface ViewSingleLeaveFailAction {
  type: LeaveActionTypes.VIEW_SINGLE_LEAVE_FAIL;
  error: ErrorState[];
}

export type ViewSingleLeaveAction =
  | ViewSingleLeaveRequestAction
  | ViewSingleLeaveSuccessAction
  | ViewSingleLeaveFailAction;

interface ApproveLeaveRequestAction {
  type: LeaveActionTypes.APPROVE_LEAVE_REQUEST;
}

interface ApproveLeaveSuccessAction {
  type: LeaveActionTypes.VIEW_SINGLE_LEAVE_SUCCESS;
  payload: LeaveDataArr;
}

interface ApproveLeaveFailAction {
  type: LeaveActionTypes.APPROVE_LEAVE_FAIL;
  error: ErrorState[];
}

export type ApproveLeaveAction =
  | ApproveLeaveRequestAction
  | ApproveLeaveSuccessAction
  | ApproveLeaveFailAction;

interface ApplyLeaveRequestAction {
  type: LeaveActionTypes.APPLY_LEAVE_REQUEST;
}

interface ApplyLeaveSuccessAction {
  type: LeaveActionTypes.GET_MY_LEAVES_SUCCESS;
  payload: LeaveDataArr;
}

interface ApplyLeaveFailAction {
  type: LeaveActionTypes.APPLY_LEAVE_FAIL;
  error: ErrorState[];
}

export type ApplyLeaveAction =
  | ApplyLeaveRequestAction
  | ApplyLeaveSuccessAction
  | ApplyLeaveFailAction;

interface GetMyLeavesRequestAction {
  type: LeaveActionTypes.GET_MY_LEAVES_REQUEST;
}

interface GetMyLeavesSuccessAction {
  type: LeaveActionTypes.GET_MY_LEAVES_SUCCESS;
  payload: LeaveDataArr;
}

interface GetMyLeavesFailAction {
  type: LeaveActionTypes.GET_MY_LEAVES_FAIL;
  error: ErrorState[];
}

export type GetMyLeavesAction =
  | GetMyLeavesRequestAction
  | GetMyLeavesSuccessAction
  | GetMyLeavesFailAction;
