import { ErrorState } from "./tenants";

export interface LeaveEmployeeData {
  email: string;
  name: string;
  phone: number;
  image: string;
  role: string;
  employeeId: string;
  isBlocked: boolean;
  companyName: string;
  id: string;
  leavesTaken: number;
}
export interface LeaveData {
  employeeId: LeaveEmployeeData;
  companyName: string;
  reason: string;
  leaveDuration: string;
  startingData: Date;
  isAccepted: string;
  version: number;
  id: string;
}

export interface LeaveDataArr {
  data: LeaveData[];
}


export interface LeaveDataObj {
  data: LeaveData;
}

export interface GetLeaveReqState {
  loading: boolean;
  data: LeaveDataArr | null;
  error: ErrorState[] | null;
}

export interface ApproveLeaveState {
  loading: boolean;
  error: ErrorState[] | null;
}

export interface ViewSingleLeaveState {
  loading: boolean;
  error: ErrorState[] | null;
  data: LeaveDataObj | null;
}

export interface ApplyLeaveState {
  loading: boolean;
  error: ErrorState[] | null;
}

export interface GetMyLeavesState {
  loading: boolean;
  data: LeaveDataArr | null;
  error: ErrorState[] | null;
}
