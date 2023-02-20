import { ApplyLeaveAction } from "../../action-models";
import { LeaveActionTypes } from "../../constants";
import { Dispatch } from "react";
import { applyLeave__API } from "../../../api";

export const applyLeave =
  (req: any, leaveData: any) =>
  async (
    dispatch: Dispatch<ApplyLeaveAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({ type: LeaveActionTypes.APPLY_LEAVE_REQUEST });

      const { data } = await applyLeave__API(req, leaveData);

      getState().getMyleaves.data.data.unshift(data.data);
      dispatch({
        type: LeaveActionTypes.GET_MY_LEAVES_SUCCESS,
        payload: getState().getMyleaves.data,
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
