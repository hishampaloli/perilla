import { config } from "../../constants/config";
import buildClient from "../../../api/buildClient";
import { GetLeaveReqAction } from "../../action-models";
import { LeaveActionTypes } from "../../constants";
import { Dispatch } from "react";

export const getLeaveRequests =
  (req: any, status: string) =>
  async (dispatch: Dispatch<GetLeaveReqAction>) => {
    try {
      dispatch({ type: LeaveActionTypes.GET_LEAVE_REQUEST_REQUEST });

      const { data } = await buildClient(req).get<any>(
        `/api/resource/leave/getLeaveRequests?isAccepted=${status}`,
        config
      );

      console.log(data);
      
      dispatch({
        type: LeaveActionTypes.GET_LEAVE_REQUEST_SUCCESS,
        payload: data.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: LeaveActionTypes.GET_LEAVE_REQUEST_FAIL,
        error: error.response.data.error.msg,
      });

      return error.response.data.error.msg;
    }
  };
