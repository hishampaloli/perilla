import { schemas } from "../../database/mongo/";

const { Room } = schemas;

export = {
  createRoom: async (room: any) => {
    const mongooseObject = Room.build(room);
    return await mongooseObject.save();
  },

  updateRoomMessage: async (roomId: string, lastMessage: string) => {
    const mongooseObject = Room.findOneAndUpdate(
      { _id: roomId },
      { $set: { lastMessage: lastMessage, lastMessageAt: new Date() } },
      { new: true, runValidators: true }
    );
    return mongooseObject;
  },

  findExistingRoom: async (userOne: string, userTwo: string) => {
    const mongooseObject = await Room.findOne({
      $and: [
        { roomMembers: { $all: [userOne, userTwo] } },
        { roomMembers: { $size: 2 } },
      ],
    });

    return mongooseObject;
  },

  getMyRooms: async (companyName: string, userId: string) => {
    console.log(userId + '///////////////////');
    const mongooseObject = await Room.find({
      $and: [{ companyName }, { roomMembers: { $all: [userId] } }],
    });

    await Room.populate(mongooseObject, { path: "roomMembers" });
    return mongooseObject;
  },

  getSingleRoom: async (companyName: string, roomId: string) => {
    const mongooseObject = await Room.findOne({
      $and: [{ companyName }, { _id: roomId }],
    });

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
        $and: [{ _id: roomId }, { companyName }],
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
        $and: [{ _id: roomId }, { companyName }],
      },
      { $pull: { roomMembers: userId } },
      { new: true, runValidators: true }
    );
    return mongooseObject;
  },
};
