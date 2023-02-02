import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface leaveDetailsAttrs {
  employeeId: string;
  companyName: string;
  reason: string;
  leaveDuration: string;
  startingData: Date;
}

interface leaveDetailsModal extends mongoose.Model<leaveDetailsDoc> {
  build(attrs: leaveDetailsAttrs): leaveDetailsDoc;
}

interface leaveDetailsDoc extends mongoose.Document {
  employeeId: string;
  companyName: string;
  reason: string;
  leaveDuration: string;
  startingData: Date;
  isAccepted: string;
  version: number;
}

const leaveDetailsSchema = new mongoose.Schema(
  {
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },

    companyName: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    leaveDuration: {
      type: Number,
      required: true,
    },
    startingDate: {
      type: Date,
      required: true,
    },
    isAccepted: {
      type: String,
      required: true,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
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

leaveDetailsSchema.set("versionKey", "version");
leaveDetailsSchema.plugin(updateIfCurrentPlugin);

leaveDetailsSchema.statics.build = (attrs: leaveDetailsAttrs) => {
  return new LeaveDetails(attrs);
};

const LeaveDetails = mongoose.model<leaveDetailsDoc, leaveDetailsModal>(
  "LeaveDetails",
  leaveDetailsSchema
);

export { LeaveDetails };
