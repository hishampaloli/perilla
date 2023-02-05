import { ViewSingleLeaveAction } from "../../action-models";
import { LeaveActionTypes } from "../../constants";
import { Dispatch } from "react";
import { viewSingleLeave__API } from "../../../api";

export const viewSingleLeave =
  (req: any, leaveId: string | string[]) =>
  async (dispatch: Dispatch<ViewSingleLeaveAction>): Promise<string> => {
    try {
      dispatch({ type: LeaveActionTypes.VIEW_SINGLE_LEAVE_REQUEST });

      const { data } = await viewSingleLeave__API(req, leaveId);

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
