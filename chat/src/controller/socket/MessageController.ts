import { BaseController } from "./baseController";

export class MessageController extends BaseController {
  sendMessage = async ({
    message,
    roomId,
  }: {
    message: string;
    roomId: string;
  }) => {
    const {
      useCases: { createChat_UseCase, updateRoomMessage_UseCase },
    } = this.dependencies;
    console.log(message, roomId);

    const createdChat = await createChat_UseCase(this.dependencies).execute({
      messageBy: this.socket.data.user.id,
      content: message,
      messagedAt: new Date(),
      messageRoom: roomId,
    });

    const updatedRoom = await updateRoomMessage_UseCase(
      this.dependencies
    ).execute(roomId, message);

    console.log(createdChat);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log(updatedRoom);

    this.socket.broadcast
      .to(roomId)
      .emit("message-from-server", { createdChat });
  };
}
