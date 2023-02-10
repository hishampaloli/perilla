import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface RoomAttrs {
  roomId: string;
  roomMembers: string[];
  createdAt: Date;
  lastMessage: object;
  lastMessageAt: Date;
  companyName: string;
}

interface RoomModal extends mongoose.Model<RoomDoc> {
  build(attrs: RoomAttrs): RoomDoc;
}

interface RoomDoc extends mongoose.Document {
  roomId: string;
  roomMembers: string[];
  createdAt: Date;
  companyName: string;
  lastMessageAt: Date;
  lastMessage: object;
  id: string;
}

const roomSchema = new mongoose.Schema(
  {
    roomId: {
      type: String,
      required: true,
    },
    roomMembers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
      },
    ],
    lastMessageAt: {
      type: Date,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    lastMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

roomSchema.set("versionKey", "version");
roomSchema.plugin(updateIfCurrentPlugin);

roomSchema.statics.build = (attrs: RoomAttrs) => {
  return new Room(attrs);
};

const Room = mongoose.model<RoomDoc, RoomModal>("Room", roomSchema);

export { Room };
