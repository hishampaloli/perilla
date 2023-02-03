import { config } from "../../constants/config";
import buildClient from "../../../api/buildClient";
import { GetMyLeavesAction } from "../../action-models";
import { LeaveDataArr } from "../../../models/Leave";
import { LeaveActionTypes } from "../../constants";
import { Dispatch } from "react";

export const getMyLeaves =
  (req: any, status: string) =>
  async (dispatch: Dispatch<GetMyLeavesAction>) => {
    try {
      dispatch({ type: LeaveActionTypes.GET_MY_LEAVES_REQUEST });

      const { data } = await buildClient(req).get<LeaveDataArr>(
        `/api/resource/leave/getMyLeave?isAccepted=${status}`,
        config
      );

      console.log(data);
      
      dispatch({
        type: LeaveActionTypes.GET_MY_LEAVES_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: LeaveActionTypes.GET_MY_LEAVES_FAIL,
        error: error.response.data.error.msg,
      });

      return error.response.data.error.msg;
    }
  };
