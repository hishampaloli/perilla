import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface ProjectAttrs {
  companyName: string;
  projectName: string;
  client: string;
  startDate: Date;
  priority: string;
  projectDescription: string;
  rate: number;
  createdBy: string;
}

interface ProjectModal extends mongoose.Model<ProjectDoc> {
  build(attrs: ProjectAttrs): ProjectDoc;
}

interface ProjectDoc extends mongoose.Document {
  companyName: string;
  projectName: string;
  client: string;
  startDate: Date;
  priority: string;
  projectDescription: string;
  rate: number;
  team: any[];
  createdBy: string;
  status: string;
  id: string;
}

const projectSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ClientDetails",
    },
    startDate: {
      type: Date,
      required: true,
    },
    priority: {
      type: String,
      required: true,
      enum: ["high", "medium", "low"],
    },
    projectDescription: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    team: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
      },
    ],
    status: {
      type: String,
      required: true,
      default: "pending",
      enum: ["pending", "completed", "dropped"],
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

projectSchema.set("versionKey", "version");
projectSchema.plugin(updateIfCurrentPlugin);

projectSchema.statics.build = (attrs: ProjectAttrs) => {
  return new Project(attrs);
};

const Project = mongoose.model<ProjectDoc, ProjectModal>(
  "Project",
  projectSchema
);

export { Project };
