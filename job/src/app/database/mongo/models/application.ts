import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface ApplicationAttrs {
  companyName: string;
  name: string;
  email: string;
  number: string;
  experience: string;
  ctc: number;
  coverLetter: string;
  interviewQsr: string;
  image: string;
  jobId: string;
}

interface ApplicationModal extends mongoose.Model<ApplicationDoc> {
  build(attrs: ApplicationAttrs): ApplicationDoc;
}

interface ApplicationDoc extends mongoose.Document {
  companyName: string;
  name: string;
  email: string;
  number: string;
  experience: string;
  ctc: number;
  coverLetter: string;
  interviewQsr: string;
  jobId: string;
  image: string;
  status: string;
  id: string;
}

const applicationSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    ctc: {
      type: String,
      required: true,
    },
    coverLetter: {
      type: String,
      required: true,
    },
    interviewQsr: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["pending", "rejected", "shortlisted", "approved"],
      default: "pending",
    },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
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

applicationSchema.set("versionKey", "version");
applicationSchema.plugin(updateIfCurrentPlugin);

applicationSchema.statics.build = (attrs: ApplicationAttrs) => {
  return new Application(attrs);
};

const Application = mongoose.model<ApplicationDoc, ApplicationModal>(
  "Application",
  applicationSchema
);

export { Application };
