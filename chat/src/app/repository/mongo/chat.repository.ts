import { schemas } from "../../database/mongo/";

const { Chat } = schemas;

export = {
  createChat: async (chat: any) => {
    const mongooseObject = Chat.build(chat);
    return await mongooseObject.save();
  },

  getAllChatsInRoom: async (roomId: string, pageNumber: number) => {
    const pageSize = 3;
    const page = pageNumber ? pageNumber : 1;

    const mongooseObject = await Chat.aggregate([
      { $match: { $and: [{ roomId }] } },
      { $sort: { messagedAt: 1 } },
      {
        $skip: pageSize * (page - 1),
      },
      {
        $limit: pageSize,
      },
    ]);

    return mongooseObject;
  },

  deleteChat: async (chatId: string, userId: string) => {
    const mongooseObject = await Chat.findOneAndDelete({
      $and: [{ _id: chatId }, { messageBy: userId }],
    });

    return mongooseObject;
  },
};
