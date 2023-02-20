import { config } from "../../constants/config";
import { GetSingleRoomAction } from "../../action-models";
import { SocketActionsTypes } from "../../constants";
import { Dispatch } from "react";
import { RoomData } from "../../../models/socket";
export const getSingleRoom =
  (req: any, roomData: RoomData) =>
  async (dispatch: Dispatch<GetSingleRoomAction>) => {
    try {
      dispatch({
        type: SocketActionsTypes.GET_SINGLE_ROOM_REQUEST,
      });

      dispatch({
        type: SocketActionsTypes.GET_SINGLE_ROOM_SUCCESS,
        payload: roomData,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: SocketActionsTypes.GET_SINGLE_ROOM_FAIL,
        error: error?.response?.data?.error?.msg
      });

      return error?.response?.data?.error?.msg
    }
  };
