import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface bankDetailsAttrs {
  employee: string;
  isApproved: boolean;
  approvedBy: string;
  bankName: string;
  accountNumber: number;
  ifcsCode: string;
  panNumber: string;
}

interface bankDetailsModal extends mongoose.Model<bankDetailsDoc> {
  build(attrs: bankDetailsAttrs): bankDetailsDoc;
}

interface bankDetailsDoc extends mongoose.Document {
  employee: string;
  isApproved: boolean;
  approvedBy: string;
  bankName: string;
  accountNumber: number;
  ifcsCode: string;
  panNumber: string;
  updatedAt: string;
  version: number;
}

const bankDetailsSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    isApproved: {
      type: Boolean,
      required: true,
      default: false,
    },
    bankName: {
      type: String,
      required: true,
      default: "Please add your bank name",
    },
    accountNumber: {
      type: Number,
      required: true,
      default: "Please add your bank account number",
    },
    ifcsCode: {
      type: String,
      required: true,
      default: "Please add your IFSC code",
    },
    panNumber: {
      type: String,
      required: true,
      default: "Please add your PAN card number",
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

bankDetailsSchema.set("versionKey", "version");
bankDetailsSchema.plugin(updateIfCurrentPlugin);

bankDetailsSchema.statics.build = (attrs: bankDetailsAttrs) => {
  return new BankDetails(attrs);
};

const BankDetails = mongoose.model<bankDetailsDoc, bankDetailsModal>(
  "BankDetail",
  bankDetailsSchema
);

export { BankDetails };
