import {
  CreateRoomController,
  JoinRoomController,
  MessageController,
  TypingController,
  VideoCallController,
  DeleteChatController,
} from "../../controller/socket";
import { Socket } from "socket.io";
import depentencies from "../../config/depentencies";
import { io } from "../../app";

export const sockets = (socket: Socket) => {
  const userId = socket.data.user.id;
  const createRoomController = new CreateRoomController(socket, depentencies);
  const joinRoomController = new JoinRoomController(socket, depentencies);
  const typingController = new TypingController(socket, depentencies);
  const messageController = new MessageController(socket, depentencies);
  const videoCallController = new VideoCallController(socket, depentencies);
  const deleteChatController = new DeleteChatController(socket, depentencies);

  io.emit("user-joined", { joinedUser: socket.data.user.id });
  socket.on("create-room", createRoomController.createRoom);
  socket.on("join-room", joinRoomController.joinRoom);
  socket.on("typing-started-client", typingController.typingStarted);
  socket.on("typing-stopped-client", typingController.typingStopped);
  socket.on("message", messageController.sendMessage);
  socket.on("message-deleted", deleteChatController.deleteMessage);
  socket.on("send-video-call-request", videoCallController.RequestVideoCall);
  socket.on("video-call-rejected", videoCallController.callRejected);
  socket.on("video-call-canceled", videoCallController.callCancelled);
  socket.on("video-call-accepted", videoCallController.callAccepted);
  socket.on("disconnect", (socket: any) => {
    console.log("left >>>>>>>>>>>>>>>>");
    io.emit("user-left", { disconnectedUser: userId });
  });
};
