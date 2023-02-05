import { resourceService_Url } from "./baseURLs";
import buildClient from "./buildClient";
import { config } from "../redux/constants/config";
import { LeaveDataArr, LeaveDataObj } from "../models/Leave";

export const applyLeave__API = (req: any, leaveData: any) =>
  buildClient(req).post<LeaveDataObj>(
    `${resourceService_Url}/leave/applyLeave`,
    leaveData,
    config
  );

export const approveLeave__API = (req: any, leaveId: string, status: boolean) =>
  buildClient(req).patch<LeaveDataObj>(
    `${resourceService_Url}/leave/approveLeave/${leaveId}?isAccepted=${status}`,
    config
  );

export const getLeaveRequests__API = (req: any, status: string) =>
  buildClient(req).get<any>(
    `${resourceService_Url}/leave/getLeaveRequests?isAccepted=${status}`,
    config
  );

export const getMyLeaves__API = (req: any, status: string) =>
  buildClient(req).get<LeaveDataArr>(
    `${resourceService_Url}/leave/getMyLeave?isAccepted=${status}`,
    config
  );

export const viewSingleLeave__API = (req: any, leaveId: string | string[]) =>
buildClient(req).get<LeaveDataObj>(
    `/api/resource/leave/viewLeave/${leaveId}`,
    config
  );