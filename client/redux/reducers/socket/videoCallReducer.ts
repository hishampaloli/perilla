import { VideoChatState } from "../../../models/socket";
import { VideoChatRequestAction } from "../../action-models";
import { SocketActionsTypes } from "../../constants";

export const videoCallReducer = (
  state: VideoChatState = { data: null, calling: null },
  action: VideoChatRequestAction
): VideoChatState => {
  switch (action.type) {
    case SocketActionsTypes.VIDEO_CALL_INCOMING:
      return {
        data: action.payload,
        calling: null,
      };

    case SocketActionsTypes.VIDEO_CALL_REQUESTING:
      return {
        data: null,
        calling: action.payload,
      };

    case SocketActionsTypes.CANCEL_VIDEO_CALL:
      return {
        data: null,
        calling: null,
      };

    case SocketActionsTypes.JOIN_VIDEO_CALL:
      return {
        data: null,
        calling: null,
      };

    default:
      return state;
  }
};
