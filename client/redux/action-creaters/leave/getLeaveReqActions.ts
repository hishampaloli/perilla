import { GetLeaveReqAction } from "../../action-models";
import { LeaveActionTypes } from "../../constants";
import { Dispatch } from "react";
import { getLeaveRequests__API } from "../../../api";

export const getLeaveRequests =
  (req: any, status: string) =>
  async (dispatch: Dispatch<GetLeaveReqAction>): Promise<string> => {
    try {
      dispatch({ type: LeaveActionTypes.GET_LEAVE_REQUEST_REQUEST });

      const { data } = await getLeaveRequests__API(req, status);

      dispatch({
        type: LeaveActionTypes.GET_LEAVE_REQUEST_SUCCESS,
        payload: data.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: LeaveActionTypes.GET_LEAVE_REQUEST_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
