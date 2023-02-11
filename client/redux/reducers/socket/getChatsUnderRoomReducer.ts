import { GetChatsUnderRoomState } from "../../../models/socket";
import { GetChatsUnderRoomAction } from "../../action-models";
import { SocketActionsTypes } from "../../constants";

export const getChatsUnderRoomReducer = (
  state: GetChatsUnderRoomState = { data: null, error: null, loading: false },
  action: GetChatsUnderRoomAction
): GetChatsUnderRoomState => {
  switch (action.type) {
    case SocketActionsTypes.GET_CHATS_UNDER_ROOM_REQUEST:
      return { data: null, loading: true, error: null };

    case SocketActionsTypes.GET_CHATS_UNDER_ROOM_SUCCESS:
      return { data: action.payload, loading: false, error: null };

    case SocketActionsTypes.GET_CHATS_UNDER_ROOM_FAIL:
      return { data: null, loading: false, error: action.error };

    default:
      return state;
  }
};
