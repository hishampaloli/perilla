import { Dispatch } from "react";
import { SocketActiveUserAction } from "../../action-models";
import { SocketActionsTypes } from "../../constants";

export const removeOfflineUsers =
  (userId: string) =>
  async (dispatch: Dispatch<SocketActiveUserAction>, getState: any) => {
    try {
      getState().onlineUsers.users = getState().onlineUsers.users.filter(
        (el: string) => {
          return el !== userId;
        }
      );

      console.log(getState().onlineUsers);
      console.log("user arr rem");
      dispatch({
        type: SocketActionsTypes.REMOVE_OFFLINE_USERS,
        payload: getState().onlineUsers.users,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
