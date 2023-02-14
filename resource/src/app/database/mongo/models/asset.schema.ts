import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

export interface assetDetailsAttrs {
  createdBy: string;
  companyName: string;
  assetName: string;
  createdAt: Date;
  price: number;
}

interface assetDetailsModal extends mongoose.Model<assetDetailsDoc> {
  build(attrs: assetDetailsAttrs): assetDetailsDoc;
}

interface assetDetailsDoc extends mongoose.Document {
  createdBy: string;
  companyName: string;
  assetName: string;
  price: number;
  createdAt: Date;
  version: number;
  id: string
}

const assetDetailsSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },

    companyName: {
      type: String,
      required: true,
    },
    assetName: {
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

assetDetailsSchema.set("versionKey", "version");
assetDetailsSchema.plugin(updateIfCurrentPlugin);

assetDetailsSchema.statics.build = (attrs: assetDetailsAttrs) => {
  return new AssetDetails(attrs);
};

const AssetDetails = mongoose.model<assetDetailsDoc, assetDetailsModal>(
  "AssetDetails",
  assetDetailsSchema
);

export { AssetDetails };
