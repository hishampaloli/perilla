import { config } from "../../constants/config";
import buildClient from "../../../api/buildClient";
import { LeaveDataObj } from "./../../../models/Leave";
import { ApplyLeaveAction } from "../../action-models";
import { LeaveActionTypes } from "../../constants";
import { Dispatch } from "react";
import { approveLeave__API } from "../../../api";

export const approveLeave =
  (req: any, leaveId: string, status: boolean) =>
  async (
    dispatch: Dispatch<ApplyLeaveAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({ type: LeaveActionTypes.APPLY_LEAVE_REQUEST });

      await approveLeave__API(req, leaveId, status);

      getState().singleLeave.data.data.isAccepted = status
        ? "accepted"
        : "rejected";
      dispatch({
        type: LeaveActionTypes.GET_MY_LEAVES_SUCCESS,
        payload: getState().singleLeave.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: LeaveActionTypes.APPLY_LEAVE_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
