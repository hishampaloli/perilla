import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface bankDetailsAttrs {
  employee: string;
  companyName: string;
}

interface bankDetailsModal extends mongoose.Model<bankDetailsDoc> {
  build(attrs: bankDetailsAttrs): bankDetailsDoc;
}

interface bankDetailsDoc extends mongoose.Document {
  employee: string;
  companyName: string;
  isApproved: boolean;
  bankName: string;
  accountNumber: string;
  ifcsCode: string;
  panNumber: string;
  updatedAt: string;
  approvalReq: boolean;
  version: number;
}

const bankDetailsSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    isApproved: {
      type: Boolean,
      required: true,
      default: false,
    },
    companyName: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
      default: "Please add your bank name",
    },
    approvalReq: {
      type: Boolean,
      required: true,
      default: false,
    },
    accountNumber: {
      type: String,
      required: true,
      default: "Please Add your account number",
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
