import { LeaveDataArr } from "../../models/Leave";
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
