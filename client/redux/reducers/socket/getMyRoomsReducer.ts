import { GetMyRoomsState } from "../../../models/socket";
import { GetMyRoomsAction } from "../../action-models";
import { SocketActionsTypes } from "../../constants";

export const getMyRoomsReducer = (
  state: GetMyRoomsState = { data: null, error: null, loading: false },
  action: GetMyRoomsAction
): GetMyRoomsState => {
  switch (action.type) {
    case SocketActionsTypes.GET_MY_ROOMS_REQUEST:
      return { data: null, loading: true, error: null };

    case SocketActionsTypes.GET_MY_ROOMS_SUCCESS:
      return { data: action.payload, loading: false, error: null };

    case SocketActionsTypes.GET_MY_ROOMS_FAIL:
      return { data: null, loading: false, error: action.error };

    default:
      return state;
  }
};
