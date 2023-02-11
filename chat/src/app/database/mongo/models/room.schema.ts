import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface RoomAttrs {
  createdAt: Date;
  companyName: string;
  lastMessageAt: Date;
}

interface RoomModal extends mongoose.Model<RoomDoc> {
  build(attrs: RoomAttrs): RoomDoc;
}

interface RoomDoc extends mongoose.Document {
  roomMembers: string[];
  createdAt: Date;
  companyName: string;
  lastMessageAt: Date;
  lastMessage: string;
  id: string;
}

const roomSchema = new mongoose.Schema(
  {
    roomMembers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
      },
    ],
    lastMessageAt: {
      type: Date,
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
      type: String,
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
