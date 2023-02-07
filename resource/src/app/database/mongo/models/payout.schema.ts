import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface payoutDetailsAttrs {
  companyName: string;
  requestedBy: string;
  salary: string;
  requestedAt: Date;
}

interface payoutDetailsModal extends mongoose.Model<payoutDetailsDoc> {
  build(attrs: payoutDetailsAttrs): payoutDetailsDoc;
}

interface payoutDetailsDoc extends mongoose.Document {
  requestedBy: string;
  salary: string;
  requestedAt: Date;
  companyName: string;
  isPaid: boolean;
  id: string;
}

const payoutDetailsSchema = new mongoose.Schema(
  {
    requestedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },

    companyName: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    requestedAt: {
      type: Date,
      required: true,
    },
    isPaid: {
      type: Number,
      required: true,
      default: false,
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

payoutDetailsSchema.set("versionKey", "version");
payoutDetailsSchema.plugin(updateIfCurrentPlugin);

payoutDetailsSchema.statics.build = (attrs: payoutDetailsAttrs) => {
  return new PayoutDetails(attrs);
};

const PayoutDetails = mongoose.model<payoutDetailsDoc, payoutDetailsModal>(
  "PayoutDetails",
  payoutDetailsSchema
);

export { PayoutDetails };
