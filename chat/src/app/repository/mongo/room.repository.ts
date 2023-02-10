import { schemas } from "../../database/mongo/";

const { Room } = schemas;

export = {
  createRoom: async (room: any) => {
    const mongooseObject = Room.build(room);
    return await mongooseObject.save();
  },

  getMyRooms: async (companyName: string, userId: string) => {
    const mongooseObject = await Room.aggregate([
      {
        $match: { $and: [{ companyName }, { roomMembers: { $in: [userId] } }] },
      },
      { $sort: { lastMessageAt: 1 } },
    ]);

    await Room.populate(mongooseObject, { path: "lastMessage" });
    return mongooseObject;
  },

  getSingleRoom: async (companyName: string, roomId: string) => {
    const mongooseObject = await Room.findOne({
      $and: [{ companyName }, { roomId }],
    });

    await Room.populate(mongooseObject, { path: "lastMessage" });
    await Room.populate(mongooseObject, { path: "roomMembers" });
    return mongooseObject;
  },

  addMemberToRoom: async (
    roomId: string,
    companyName: string,
    userId: string
  ) => {
    const mongooseObject = await Room.findOneAndUpdate(
      {
        $and: [{ roomId }, { companyName }],
      },
      { $addToSet: { roomMembers: userId } },
      { new: true, runValidators: true }
    );

    return mongooseObject;
  },

  removeMemberFromRoom: async (
    roomId: string,
    companyName: string,
    userId: string
  ) => {
    const mongooseObject = await Room.findOneAndUpdate(
      {
        $and: [{ roomId }, { companyName }],
      },
      { $pull: { roomMembers: userId } },
      { new: true, runValidators: true }
    );
    return mongooseObject;
  },
};
