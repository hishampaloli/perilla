import getAllChatsUnderRoomController from "./getAllChatsUnderRoom.controller";

export = (dependencies: any) => {
  return {
    getAllChatsUnderRoomController:
      getAllChatsUnderRoomController(dependencies),
  };
};
