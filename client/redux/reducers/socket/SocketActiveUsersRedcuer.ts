import { AddOnlineUsersState } from "../../../models/socket";
import { SocketActiveUserAction } from "../../action-models";
import { SocketActionsTypes } from "../../constants";

export const socketActiveUsersReducer = (
  state: AddOnlineUsersState = { users: [] },
  action: SocketActiveUserAction
): AddOnlineUsersState => {
  switch (action.type) {
    case SocketActionsTypes.ADD_LIVE_USERS:
      return {
        users: action.payload,
      };

    case SocketActionsTypes.REMOVE_OFFLINE_USERS:
      return {
        users: action.payload,
      };

    default:
      return state;
  }
};
