import { Dispatch } from "react";
import { VideoChatRequestAction } from "../../action-models";
import { SocketActionsTypes } from "../../constants";
import { Socket } from "socket.io-client";
import { VideoChatData } from "../../../models/socket";

export const cancelOrJoinVideoCall =
  () => async (dispatch: Dispatch<VideoChatRequestAction>) => {
    try {
      dispatch({
        type: SocketActionsTypes.CANCEL_VIDEO_CALL,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
