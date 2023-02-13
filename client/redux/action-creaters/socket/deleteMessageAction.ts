import { GetChatsUnderRoomAction } from "../../action-models";
import { SocketActionsTypes } from "../../constants";
import { Dispatch } from "react";
import { MessageData } from "../../../models/socket";

export const deleteChat =
  (messageId: string) =>
  async (dispatch: Dispatch<GetChatsUnderRoomAction>, getState: any) => {
    try {
      getState().allChatsUnderRoom.data.data =
        getState().allChatsUnderRoom.data.data.filter((el: MessageData) => {
          if (el.id === messageId) {
            el.content = "message deleted";
          }
          return el;
        });
      dispatch({
        type: SocketActionsTypes.GET_CHATS_UNDER_ROOM_SUCCESS,
        payload: getState().allChatsUnderRoom.data,
      });

      return "success";
    } catch (error: any) {
      console.log(error);
      return error.response?.data?.error?.msg;
    }
  };
