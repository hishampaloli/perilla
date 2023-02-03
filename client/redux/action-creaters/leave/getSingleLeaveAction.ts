import { config } from "../../constants/config";
import buildClient from "../../../api/buildClient";
import { ViewSingleLeaveAction } from "../../action-models";
import { LeaveDataObj } from "../../../models/Leave";
import { LeaveActionTypes } from "../../constants";
import { Dispatch } from "react";

export const viewSingleLeave =
  (req: any, leaveId: string | string[]) =>
  async (dispatch: Dispatch<ViewSingleLeaveAction>) => {
    try {
      dispatch({ type: LeaveActionTypes.VIEW_SINGLE_LEAVE_REQUEST });

      const { data } = await buildClient(req).get<LeaveDataObj>(
        `/api/resource/leave/viewLeave/${leaveId}`,
        config
      );

      console.log(data);

      dispatch({
        type: LeaveActionTypes.VIEW_SINGLE_LEAVE_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: LeaveActionTypes.VIEW_SINGLE_LEAVE_FAIL,
        error: error.response.data.error.msg,
      });

      return error.response.data.error.msg;
    }
  };
