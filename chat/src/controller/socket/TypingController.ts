import { BaseController } from "./baseController";

export class TypingController extends BaseController {
  typingStarted = ({ roomId }: { roomId: string }) => {
    console.log(roomId);
    let skt = this.socket.broadcast;
    skt = roomId ? skt.to(roomId) : skt;
    skt.emit("typing-started-server", {
      typingUser: this.socket.data.user.name,
    });
  };

  typingStopped = ({ roomId }: { roomId: string }) => {
    console.log(roomId);
    let skt = this.socket.broadcast;
    skt = roomId ? skt.to(roomId) : skt;
    skt.emit("typing-stopped-server");
  };
}
