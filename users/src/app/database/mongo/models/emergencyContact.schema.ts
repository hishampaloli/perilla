import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface ContactDetails {
  name: string;
  phone: number;
  otherInfo: string;
}
interface emergencyContactAttrs {
  employee: string;
  primary: ContactDetails;
  secondary: ContactDetails;
}

interface emergencyContactModal extends mongoose.Model<emergencyContactDoc> {
  build(attrs: emergencyContactAttrs): emergencyContactDoc;
}

interface emergencyContactDoc extends mongoose.Document {
  employee: string;
  primary: ContactDetails;
  secondary: ContactDetails;
  updatedAt: string;
  version: number;
}

const emergencyContactSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    primary: {
      type: Object,
    },
    secondary: {
      type: Object,
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

emergencyContactSchema.set("versionKey", "version");
emergencyContactSchema.plugin(updateIfCurrentPlugin);

emergencyContactSchema.statics.build = (attrs: emergencyContactAttrs) => {
  return new EmergencyContact(attrs);
};

const EmergencyContact = mongoose.model<
  emergencyContactDoc,
  emergencyContactModal
>("EmergencyContact", emergencyContactSchema);

export { EmergencyContact };
