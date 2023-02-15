import { BaseController } from "./baseController";

export class VideoCallController extends BaseController {
  
  RequestVideoCall = ({ roomId }: { roomId: string }) => {
    console.log(roomId);
    console.log("video call request");
    let skt = this.socket.broadcast;
    skt = roomId ? skt.to(roomId) : skt;
    skt.emit("video-call-request-server", {
      callingUser: this.socket.data.user.name,
      roomId,
      image: this.socket.data.user.image,
    });
  };

  callRejected = ({ roomId }: { roomId: string }) => {
    console.log("call rejected");
    let skt = this.socket.broadcast;
    skt = roomId ? skt.to(roomId) : skt;
    skt.emit("video-call-rejected-server", {
      roomId,
    });
  };

  callCancelled = ({ roomId }: { roomId: string }) => {
    console.log("call cancelled");
    let skt = this.socket.broadcast;
    skt = roomId ? skt.to(roomId) : skt;
    skt.emit("video-call-canceled-server", {
      roomId,
    });
  };

  callAccepted = ({ roomId }: { roomId: string }) => {
    console.log("call cancelled");
    let skt = this.socket.broadcast;
    skt = roomId ? skt.to(roomId) : skt;
    skt.emit("video-call-accepted-server", {
      roomId,
    });
  };
}
