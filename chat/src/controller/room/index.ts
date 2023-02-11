import getMyRoomsController from "./getMyRooms.controller";
import getSingleRoomController from "./getSingleRoom.controller";

export = (dependencies: any) => {
  return {
    getMyRoomsController: getMyRoomsController(dependencies),
    getSingleRoomController: getSingleRoomController(dependencies),
  };
};
