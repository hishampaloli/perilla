import { SocketActionsTypes } from "../constants";
import { Socket } from "socket.io-client";
import { ErrorState } from "../../models/tenants";
import {
  MessageData,
  MessageDataArr,
  RoomData,
  RoomDataArr,
} from "../../models/socket";

interface ConnectSocketRequestAction {
  type: SocketActionsTypes.CONNECT_SOCKET;
  payload: Socket;
}

export type ConnectSocketAction = ConnectSocketRequestAction;

interface GetMyRoomsRequestAction {
  type: SocketActionsTypes.GET_MY_ROOMS_REQUEST;
}

interface GetMyRoomsSuccessAction {
  type: SocketActionsTypes.GET_MY_ROOMS_SUCCESS;
  payload: RoomDataArr;
}

interface GetMyRoomsFailAction {
  type: SocketActionsTypes.GET_MY_ROOMS_FAIL;
  error: ErrorState[];
}
export type GetMyRoomsAction =
  | GetMyRoomsRequestAction
  | GetMyRoomsSuccessAction
  | GetMyRoomsFailAction;

interface GetSingleRoomRequestAction {
  type: SocketActionsTypes.GET_SINGLE_ROOM_REQUEST;
}

interface GetSingleRoomSuccessAction {
  type: SocketActionsTypes.GET_SINGLE_ROOM_SUCCESS;
  payload: RoomData;
}

interface GetSingleRoomFailAction {
  type: SocketActionsTypes.GET_SINGLE_ROOM_FAIL;
  error: ErrorState[];
}
export type GetSingleRoomAction =
  | GetSingleRoomRequestAction
  | GetSingleRoomSuccessAction
  | GetSingleRoomFailAction;

interface GetChatsUnderRoomRequestAction {
  type: SocketActionsTypes.GET_CHATS_UNDER_ROOM_REQUEST;
}

interface GetChatsUnderRoomSuccessAction {
  type: SocketActionsTypes.GET_CHATS_UNDER_ROOM_SUCCESS;
  payload: MessageDataArr;
}

interface GetChatsUnderRoomFailAction {
  type: SocketActionsTypes.GET_CHATS_UNDER_ROOM_FAIL;
  error: ErrorState[];
}
export type GetChatsUnderRoomAction =
  | GetChatsUnderRoomRequestAction
  | GetChatsUnderRoomSuccessAction
  | GetChatsUnderRoomFailAction;

export type PushMessageToRoomAction =
  | GetChatsUnderRoomSuccessAction
  | GetMyRoomsSuccessAction;
