import { GetMyLeavesAction } from "../../action-models";
import { LeaveActionTypes } from "../../constants";
import { Dispatch } from "react";
import { getMyLeaves__API } from "../../../api";

export const getMyLeaves =
  (req: any, status: string) =>
  async (dispatch: Dispatch<GetMyLeavesAction>): Promise<string> => {
    try {
      dispatch({ type: LeaveActionTypes.GET_MY_LEAVES_REQUEST });

      const { data } = await getMyLeaves__API(req, status);

      dispatch({
        type: LeaveActionTypes.GET_MY_LEAVES_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: LeaveActionTypes.GET_MY_LEAVES_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
