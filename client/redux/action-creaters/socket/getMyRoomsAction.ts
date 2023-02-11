import { config } from "../../constants/config";
import { GetMyRoomsAction } from "../../action-models";
import { SocketActionsTypes } from "../../constants";
import { Dispatch } from "react";
import { getMyRooms__API } from "../../../api";

export const getMyRooms =
  (req: any) => async (dispatch: Dispatch<GetMyRoomsAction>) => {
    try {
      dispatch({
        type: SocketActionsTypes.GET_MY_ROOMS_REQUEST,
      });

      const { data } = await getMyRooms__API(req);
      console.log(data);
      dispatch({
        type: SocketActionsTypes.GET_MY_ROOMS_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: SocketActionsTypes.GET_MY_ROOMS_FAIL,
        error: error.response.data.error.msg,
      });

      return error.response.data.error.msg;
    }
  };
