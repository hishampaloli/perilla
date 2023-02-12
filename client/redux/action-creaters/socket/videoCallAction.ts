import { Dispatch } from "react";
import { VideoChatRequestAction } from "../../action-models";
import { SocketActionsTypes } from "../../constants";
import { Socket } from "socket.io-client";
import { VideoChatData } from "../../../models/socket";

export const incomingVideoCall =
  (data: VideoChatData) =>
  async (dispatch: Dispatch<VideoChatRequestAction>) => {
    try {
      dispatch({
        type: SocketActionsTypes.VIDEO_CALL_INCOMING,
        payload: data,
      });
      
    } catch (error: any) {
      console.log(error);
    }
  };
