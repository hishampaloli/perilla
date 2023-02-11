import { AddOnlineUsersState } from "../../../models/socket";
import { AddOnlineUserAction } from "../../action-models";
import { SocketActionsTypes } from "../../constants";

export const socketActiveUsersReducer = (
  state: AddOnlineUsersState = { users: [] },
  action: AddOnlineUserAction
): AddOnlineUsersState => {
  switch (action.type) {
    case SocketActionsTypes.ADD_LIVE_USERS:
      return {
        users: action.payload,
      };

    default:
      return state;
  }
};
