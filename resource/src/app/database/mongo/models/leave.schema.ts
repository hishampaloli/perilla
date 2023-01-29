import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface clientDetailsAttrs {
  companyName: string;
  clientCompany: string;
  clientId: string;
  clientName: string;
  phone: string;
  email: string;
  address: string;
  gender: string;
  image: string;
}

interface clientDetailsModal extends mongoose.Model<clientDetailsDoc> {
  build(attrs: clientDetailsAttrs): clientDetailsDoc;
}

interface clientDetailsDoc extends mongoose.Document {
  companyName: string;
  clientCompany: string;
  clientId: string;
  clientName: string;
  phone: string;
  email: string;
  address: string;
  gender: string;
  image: string;
  projects: any[];
  updatedAt: string;
  version: number;
}

const clientDetailsSchema = new mongoose.Schema(
  {
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
    companyName: {
      type: String,
      required: true,
    },
    clientCompany: {
      type: String,
      required: true,
    },
    clientId: {
      type: String,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    image: {
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

clientDetailsSchema.set("versionKey", "version");
clientDetailsSchema.plugin(updateIfCurrentPlugin);

clientDetailsSchema.statics.build = (attrs: clientDetailsAttrs) => {
  return new ClientDetails(attrs);
};

const ClientDetails = mongoose.model<clientDetailsDoc, clientDetailsModal>(
  "ClientDetails",
  clientDetailsSchema
);

export { ClientDetails };
