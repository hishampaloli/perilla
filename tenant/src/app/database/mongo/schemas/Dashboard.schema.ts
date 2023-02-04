import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface DashBoardAttrs {
  companyName: string;
  adminName: string;
}

interface DashBoardModal extends mongoose.Model<DashBoardDoc> {
  build(attrs: DashBoardAttrs): DashBoardDoc;
}

interface DashBoardDoc extends mongoose.Document {
  companyName: string;
  adminName: string;
  employeeCount: number;
  totalProject: number;
  totalTask: number;
  totalExpense: number;
  clientCount: number;
  version: number;
}

const dashBoardSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, "Please provide a company name"],
    },
    adminName: {
      type: String,
      required: [true, "Please provide a admin name"],
    },
    employeeCount: {
      type: Number,
      default: 0,
    },
    totalProject: {
      type: Number,
      default: 0,
    },
    totalTask: {
      type: Number,
      default: 0,
    },
    totalExpense: {
      type: Number,
      default: 0,
    },

    clientCount: {
      type: Number,
      default: 0,
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

dashBoardSchema.set("versionKey", "version");
dashBoardSchema.plugin(updateIfCurrentPlugin);

dashBoardSchema.statics.build = (attrs: DashBoardAttrs) => {
  return new DashBoard(attrs);
};

const DashBoard = mongoose.model<DashBoardDoc, DashBoardModal>(
  "DashBoard",
  dashBoardSchema
);

export { DashBoard };
