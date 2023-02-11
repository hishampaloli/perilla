import { GetChatsUnderRoomAction } from "../../action-models";
import { SocketActionsTypes } from "../../constants";
import { Dispatch } from "react";
import { getChatsUnderRoom__API } from "../../../api";

export const getChatsUnderRoomRooms =
  (req: any, roomId: string) =>
  async (dispatch: Dispatch<GetChatsUnderRoomAction>) => {
    try {
      dispatch({
        type: SocketActionsTypes.GET_CHATS_UNDER_ROOM_REQUEST,
      });

      const { data } = await getChatsUnderRoom__API(req, roomId);
      console.log(data);
      dispatch({
        type: SocketActionsTypes.GET_CHATS_UNDER_ROOM_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: SocketActionsTypes.GET_CHATS_UNDER_ROOM_FAIL,
        error: error.response.data.error.msg,
      });

      return error.response.data.error.msg;
    }
  };
