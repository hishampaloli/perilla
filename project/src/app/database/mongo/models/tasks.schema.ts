import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface TaskAttrs {
  project: string;
  taskName: string;
  taskDescription: string;
  assignedTo: string;
  assignedBy: string;
  startDate: string;
  priority: string;
  deadLine: string;
}

interface TaskModal extends mongoose.Model<TaskDoc> {
  build(attrs: TaskAttrs): TaskDoc;
}

interface TaskDoc extends mongoose.Document {
  project: string;
  taskName: string;
  taskDescription: string;
  assignedTo: string;
  startDate: string;
  priority: string;
  deadLine: string;
  isApproved: string;
  assignedBy: string;
  isCompleted: string;
  id: string;
}

const taskSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    assignedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    taskDescription: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    priority: {
      type: String,
      required: true,
      enum: ["high", "low", "medium"],
    },
    deadline: {
      type: String,
      required: true,
    },
    isApproved: {
      type: Boolean,
      required: true,
      default: false,
    },
    isCompleted: {
      type: Boolean,
      required: true,
      default: false,
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

taskSchema.set("versionKey", "version");
taskSchema.plugin(updateIfCurrentPlugin);

taskSchema.statics.build = (attrs: TaskAttrs) => {
  return new Task(attrs);
};

const Task = mongoose.model<TaskDoc, TaskModal>("Task", taskSchema);

export { Task };
