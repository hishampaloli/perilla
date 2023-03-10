import { Dispatch } from "react";
import { MessageData, RoomData } from "../../../models/socket";
import { SocketActiveUserAction } from "../../action-models";
import { SocketActionsTypes } from "../../constants";

export const AddLiveUsers =
  (userId: string) =>
  async (dispatch: Dispatch<SocketActiveUserAction>, getState: any) => {
    try {
      getState().onlineUsers.users.push(userId);
      console.log(getState().onlineUsers);

      dispatch({
        type: SocketActionsTypes.ADD_LIVE_USERS,
        payload: getState().onlineUsers.users,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
