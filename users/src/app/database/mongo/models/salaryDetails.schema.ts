import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface salaryDetailsAttrs {
  companyName: string;
  employee: string;
  salary: number;
  payementType: string;
  PfRate: number;
}

interface salaryDetailsModal extends mongoose.Model<salaryDetailsDoc> {
  build(attrs: salaryDetailsAttrs): salaryDetailsDoc;
}

interface salaryDetailsDoc extends mongoose.Document {
  companyName: string;
  employee: string;
  salary: number;
  payementType: string;
  PfRate: number;
  payrolls: any;
  updatedAt: string;
  version: number;
}

const salaryDetailsSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    salary: {
      type: Number,
      required: true,
      default: 0,
    },
    companyName: {
      type: String,
      required: true,
    },
    paymentType: {
      type: String,
      required: true,
      default: "Please add a payment type",
    },
    PfRate: {
      type: Number,
      required: true,
      default: 0,
    },
    payrolls: {
      type: Array,
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

salaryDetailsSchema.set("versionKey", "version");
salaryDetailsSchema.plugin(updateIfCurrentPlugin);

salaryDetailsSchema.statics.build = (attrs: salaryDetailsAttrs) => {
  return new SalaryDetails(attrs);
};

const SalaryDetails = mongoose.model<salaryDetailsDoc, salaryDetailsModal>(
  "SalaryDetails",
  salaryDetailsSchema
);

export { SalaryDetails };
