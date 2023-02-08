import { GetAllPayoutsAction } from "../../../action-models";
import { ResourceActionTypes } from "../../../constants";
import { Dispatch } from "react";
import { getAllPayouts_API, getMyPayouts_API } from "../../../../api";

export const getAllPayouts =
  (req: any, type: string, status: boolean) =>
  async (
    dispatch: Dispatch<GetAllPayoutsAction>,
  ): Promise<string> => {
    try {
      dispatch({ type: ResourceActionTypes.GET_ALL_PAYOUTS_REQUEST });

      const { data } =
        type === "admin"
          ? await getAllPayouts_API("", status)
          : await getMyPayouts_API("");

      dispatch({
        type: ResourceActionTypes.GET_ALL_PAYOUTS_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ResourceActionTypes.GET_ALL_PAYOUTS_FAIL,
        error: error.response.data.error.msg,
      });

      return error.response.data.error.msg.message;
    }
  };
