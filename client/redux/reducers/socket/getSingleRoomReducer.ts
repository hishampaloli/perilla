import { GetSingleRoomsState } from "../../../models/socket";
import { GetSingleRoomAction } from "../../action-models";
import { SocketActionsTypes } from "../../constants";

export const getSingleRoomsReducer = (
  state: GetSingleRoomsState = { data: null, error: null, loading: false },
  action: GetSingleRoomAction
): GetSingleRoomsState => {
  switch (action.type) {
    case SocketActionsTypes.GET_SINGLE_ROOM_REQUEST:
      return { data: null, loading: true, error: null };

    case SocketActionsTypes.GET_SINGLE_ROOM_SUCCESS:
      return { data: action.payload, loading: false, error: null };

    case SocketActionsTypes.GET_SINGLE_ROOM_FAIL:
      return { data: null, loading: false, error: action.error };

    default:
      return state;
  }
};
