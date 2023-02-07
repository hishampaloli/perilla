import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface expenseDetailsAttrs {
  createdBy: string;
  companyName: string;
  expenseName: string;
  createdAt: Date;
  price: number;
}

interface expenseDetailsModal extends mongoose.Model<expenseDetailsDoc> {
  build(attrs: expenseDetailsAttrs): expenseDetailsDoc;
}

interface expenseDetailsDoc extends mongoose.Document {
  createdBy: string;
  companyName: string;
  expenseName: string;
  price: number;
  createdAt: Date;
  version: number;
}

const expenseDetailsSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },

    companyName: {
      type: String,
      required: true,
    },
    expenseName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
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

expenseDetailsSchema.set("versionKey", "version");
expenseDetailsSchema.plugin(updateIfCurrentPlugin);

expenseDetailsSchema.statics.build = (attrs: expenseDetailsAttrs) => {
  return new ExpenseDetails(attrs);
};

const ExpenseDetails = mongoose.model<expenseDetailsDoc, expenseDetailsModal>(
  "ExpenseDetails",
  expenseDetailsSchema
);

export { ExpenseDetails };
