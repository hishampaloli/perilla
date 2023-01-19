import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface notificationAttrs {
  message: string;
  companyName: number;
  employee: string;
}

interface notificationModal extends mongoose.Model<notificationDoc> {
  build(attrs: notificationAttrs): notificationDoc;
}

interface notificationDoc extends mongoose.Document {
  employee: string;
  message: string;
  companyName: string;
  updatedAt: string;
  version: number;
}

const notificationSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    message: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
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

notificationSchema.set("versionKey", "version");
notificationSchema.plugin(updateIfCurrentPlugin);

notificationSchema.statics.build = (attrs: notificationAttrs) => {
  return new Notification(attrs);
};

const Notification = mongoose.model<notificationDoc, notificationModal>(
  "Notification",
  notificationSchema
);

export { Notification };
