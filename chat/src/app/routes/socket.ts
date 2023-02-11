import {
  CreateRoomController,
  JoinRoomController,
  MessageController,
} from "../../controller/socket";
import { Socket } from "socket.io";
import depentencies from "../../config/depentencies";

export const sockets = (socket: Socket) => {
  const createRoomController = new CreateRoomController(socket, depentencies);
  const joinRoomController = new JoinRoomController(socket, depentencies);

  const messageController = new MessageController(socket, depentencies);
  socket.on("create-room", createRoomController.createRoom);
  socket.on("join-room", joinRoomController.joinRoom);

  socket.on("message", messageController.sendMessage);

  socket.on("disconnect", (socket: any) => {
    console.log("desconneted");
  });
};
