import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface personalInfoAttrs {
  employee: string;
}

interface personalInfoModal extends mongoose.Model<personalInfoDoc> {
  build(attrs: personalInfoAttrs): personalInfoDoc;
}

interface personalInfoDoc extends mongoose.Document {
  nationality: string;
  religion: string;
  martialStatus: string;
  employementOfPartner: string;
  passportNumber: number;
  noOfChildren: number;
  updatedAt: string;
  employee: string;
  version: number;
}

const personalInformationSchema = new mongoose.Schema(
  {
    nationality: {
      type: String,
      required: true,
      default: "Please add your country",
    },
    religion: {
      type: String,
      required: true,
      default: "Please add your religion",
    },
    martialStatus: {
      type: String,
      required: true,
      default: "Please add your status",
    },
    employementOfPartner: {
      type: String,
      required: true,
      default: "Please add your status",
    },
    passportNumber: {
      type: Number,
      required: true,
      default: "00000000000",
    },
    noOfChildren: {
      type: Number,
      required: true,
      default: 0,
    },
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
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

personalInformationSchema.set("versionKey", "version");
personalInformationSchema.plugin(updateIfCurrentPlugin);

personalInformationSchema.statics.build = (attrs: personalInfoAttrs) => {
  return new PersonalInfo(attrs);
};

const PersonalInfo = mongoose.model<personalInfoDoc, personalInfoModal>(
  "PersonalInfo",
  personalInformationSchema
);

export { PersonalInfo };
