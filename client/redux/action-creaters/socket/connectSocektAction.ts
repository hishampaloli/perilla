import { Dispatch } from "react";
import { ConnectSocketAction } from "../../action-models";
import { SocketActionsTypes } from "../../constants";
import { Socket } from "socket.io-client";

export const connectSocket =
  (socket: Socket) =>
  async (dispatch: Dispatch<ConnectSocketAction>, ) => {
    try {
      dispatch({
        type: SocketActionsTypes.CONNECT_SOCKET,
        payload: socket,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
