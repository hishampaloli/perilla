import { schemas } from "../../database/mongo/";

const { Chat } = schemas;

export = {
  createChat: async (chat: any) => {
    const mongooseObject = Chat.build(chat);
    await mongooseObject.save();
    await Chat.populate(mongooseObject, { path: "messageBy" });
    return mongooseObject;
  },

  getAllChatsInRoom: async (roomId: string, pageNumber: number) => {
    const pageSize = 1000;
    const page = pageNumber ? pageNumber : 1;

    const mongooseObject = await Chat.find({ messageRoom: roomId })
      .sort({
        messagedAt: 1,
      })
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    await Chat.populate(mongooseObject, { path: "messageBy" });
    return mongooseObject;
  },

  deleteChat: async (chatId: string, userId: string) => {
    const mongooseObject = await Chat.findOneAndDelete({
      $and: [{ _id: chatId }, { messageBy: userId }],
    });

    return mongooseObject;
  },
};
