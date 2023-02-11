import { chatService_Url } from "./baseURLs";
import buildClient from "./buildClient";
import { config } from "../redux/constants/config";
import { AssetsDataArr, AssetsDataObj } from "../models/resources";
import { ChatEmployeeDataArr } from "../redux/action-models";
import { MessageDataArr, RoomDataArr } from "../models/socket";

export const getAllChatEmployees__API = (req: any, name: string) =>
  buildClient(req).get<ChatEmployeeDataArr>(
    `${chatService_Url}/employee/getAllEmployees?name=${name}`,
    config
  );

export const getMyRooms__API = (req: any) =>
  buildClient(req).get<RoomDataArr>(`${chatService_Url}/room/myRooms`, config);

export const getChatsUnderRoom__API = (req: any, roomId: string) =>
  buildClient(req).get<MessageDataArr>(
    `${chatService_Url}/chat/allChats?roomId=${roomId}`,
    config
  );
