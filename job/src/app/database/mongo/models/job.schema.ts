import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface JobAttrs {
  companyName: string;
  jobTitle: string;
  jobDesignation: string;
  lastDate: Date;
  jobDescription: string;
  jobKeyRoles: string[];
  jobType: string;
  salaryFrom: number;
  salaryTo: number;
  experience: string;
  vacancy: number;
  location: string;
  applicationQuestions: string[];
  status: string;
}

interface JobModal extends mongoose.Model<JobDoc> {
  build(attrs: JobAttrs): JobDoc;
}

interface JobDoc extends mongoose.Document {
  companyName: string;
  jobTitle: string;
  jobDesignation: string;
  lastDate: Date;
  jobDescription: string;
  jobKeyRoles: string[];
  jobType: string;
  salaryFrom: number;
  salaryTo: number;
  experience: string;
  status: string;
  vacancy: number;
  location: string;
  startDate: Date;
  id: string;
  applications: string[];
  applicationQuestions: string[];
}

const jobSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    jobDesignation: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
      default: new Date(),
    },
    lastDate: {
      type: Date,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    jobKeyRoles: [
      {
        type: String,
        required: true,
      },
    ],
    jobType: {
      type: String,
      required: true,
    },
    salaryFrom: {
      type: Number,
      required: true,
    },
    salaryTo: {
      type: Number,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    vacancy: {
      type: Number,
      required: true,
      default: 1,
    },
    location: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "open",
    },
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Applicants",
      },
    ],
    applicationQuestions: [{ type: String }],
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

jobSchema.set("versionKey", "version");
jobSchema.plugin(updateIfCurrentPlugin);

jobSchema.statics.build = (attrs: JobAttrs) => {
  return new Job(attrs);
};

const Job = mongoose.model<JobDoc, JobModal>("Job", jobSchema);

export { Job };
