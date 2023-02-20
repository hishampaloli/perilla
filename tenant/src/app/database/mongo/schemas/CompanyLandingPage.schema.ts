import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface LandingPageAttrs {
  companyName: string;
  landingPageTitle: string;
  landingPageDescription: string;
}

interface LandingPageModal extends mongoose.Model<LandingPageDoc> {
  build(attrs: LandingPageAttrs): LandingPageDoc;
}

interface LandingPageDoc extends mongoose.Document {
  companyName: string;
  landingPageTitle: string;
  landingPageDescription: string;
  id: string;
}

const landingPageSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, "Please provide a company name"],
    },
    landingPageTitle: {
      type: String,
      required: [true, "please provide a title"],
      default: "Welcome to the company landing page",
    },
    landingPageDescription: {
      type: String,
      required: [true, "please provide a description"],
      default: "No description",
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

landingPageSchema.set("versionKey", "version");
landingPageSchema.plugin(updateIfCurrentPlugin);

landingPageSchema.statics.build = (attrs: LandingPageAttrs) => {
  return new LandingPage(attrs);
};

const LandingPage = mongoose.model<LandingPageDoc, LandingPageModal>(
  "LandingPage",
  landingPageSchema
);

export { LandingPage };
