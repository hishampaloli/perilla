import { BaseController } from "./baseController";

export class JoinRoomController extends BaseController {
  joinRoom = ({ roomIds }: { roomIds: string }) => {
    console.log(roomIds + "roooom");
    this.socket.join(roomIds);
    this.socket.broadcast.to(roomIds).emit("room-joined", { roomIds });
  };
}
