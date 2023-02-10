import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface ChatAttrs {
  messageBy: string;
  content: string;
  messagedAt: Date;
  messageRoom: string;
}

interface ChatModal extends mongoose.Model<ChatDoc> {
  build(attrs: ChatAttrs): ChatDoc;
}

interface ChatDoc extends mongoose.Document {
  messageBy: string;
  content: string;
  messagedAt: Date;
  messageRoom: string;
  id: string;
}

const chatSchema = new mongoose.Schema(
  {
    messageBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    content: {
      type: String,
      required: [true, "Message content cannot be empty"],
    },
    messagedAt: {
      type: Date,
      required: true,
    },
    messageRoom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
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

chatSchema.set("versionKey", "version");
chatSchema.plugin(updateIfCurrentPlugin);

chatSchema.statics.build = (attrs: ChatAttrs) => {
  return new Chat(attrs);
};

const Chat = mongoose.model<ChatDoc, ChatModal>("Chat", chatSchema);

export { Chat };
