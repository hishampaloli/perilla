import { ConnectSocketState } from "../../../models/socket";
import { ConnectSocketAction } from "../../action-models";
import { SocketActionsTypes } from "../../constants";

export const connectSocketReducer = (
  state: ConnectSocketState = { socket: null },
  action: ConnectSocketAction
): ConnectSocketState => {
  switch (action.type) {
    case SocketActionsTypes.CONNECT_SOCKET:
      return {
        socket: action.payload,
      };

    default:
      return state;
  }
};
