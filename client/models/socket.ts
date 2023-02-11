import { Socket } from "socket.io-client";
import { ErrorState } from "./tenants";

export interface MessageData {
  messageBy: ChatEmp;
  content: string;
  messagedAt: Date;
  messageRoom: string;
  id: string;
}

export interface MessageDataArr {
  data: MessageData[];
}

export interface ChatEmp {
  id: string;
  email: string;
  name: string;
  phone: number;
  role: string;
  image: string;
}

export interface RoomData {
  roomMembers: ChatEmp[];
  createdAt: Date;
  companyName: string;
  lastMessageAt: Date;
  lastMessage: string;
  id: string;
}

export interface RoomDataArr {
  data: RoomData[];
}

export interface RoomDataObj {
  data: RoomData;
}

export interface ConnectSocketState {
  socket: any;
}

export interface GetMyRoomsState {
  data: RoomDataArr | null;
  error: ErrorState[] | null;
  loading: boolean;
}

export interface GetSingleRoomsState {
  data: RoomData | null;
  error: ErrorState[] | null;
  loading: boolean;
}

export interface GetChatsUnderRoomState {
  data: MessageDataArr | null;
  error: ErrorState[] | null;
  loading: boolean;
}


export interface AddOnlineUsersState {
  users: string[] | [];
}
