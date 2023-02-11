import { Dispatch } from "react";
import { MessageData, RoomData } from "../../../models/socket";
import { PushMessageToRoomAction } from "../../action-models";
import { SocketActionsTypes } from "../../constants";

export const pushMessageToRoom =
  (message: MessageData) =>
  async (dispatch: Dispatch<PushMessageToRoomAction>, getState: any) => {
    try {
      if (getState().singleRoom.data.id === message.messageRoom) {
        getState().allChatsUnderRoom.data.data.push(message);
      }
      console.log(getState().myRooms.data.data);
      console.log(message);
      getState().myRooms.data.data.forEach((el: any) => {
        if (el.id == message.messageRoom) {
          el.lastMessage = message.content;
          el.lastMessageAt = message.messagedAt;
        }
      });

      getState().myRooms.data.data.sort((a: RoomData, b: RoomData) => {
        return new Date(b.lastMessageAt) - new Date(a.lastMessageAt);
      });

      console.log(getState().myRooms.data.data);
      dispatch({
        type: SocketActionsTypes.GET_CHATS_UNDER_ROOM_SUCCESS,
        payload: getState().allChatsUnderRoom.data,
      });

      dispatch({
        type: SocketActionsTypes.GET_MY_ROOMS_SUCCESS,
        payload: getState().myRooms.data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
