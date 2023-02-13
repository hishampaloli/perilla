import { BaseController } from "./baseController";

export class DeleteChatController extends BaseController {
  deleteMessage = async ({
    messageId,
    roomId,
  }: {
    messageId: string;
    roomId: string;
  }) => {
    const {
      useCases: { deleteChat_UseCase },
    } = this.dependencies;
    console.log(messageId);

    const deleteChat = await deleteChat_UseCase(this.dependencies).execute(
      messageId,
      this.socket.data.user.id
    );

    this.socket.broadcast
      .to(roomId)
      .emit("message-deleted-from-server", { messageId });
  };
}
