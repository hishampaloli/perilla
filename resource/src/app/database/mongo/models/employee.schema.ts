import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

export interface EmployeeAttrs {
  role: string;
  employeeId: string;
  companyName: string;
  email: string;
  name: string;
  phone: string;
  image: string;
  id: string;
}

interface EmployeeModal extends mongoose.Model<EmployeeDoc> {
  build(attrs: EmployeeAttrs): EmployeeDoc;
}

interface EmployeeDoc extends mongoose.Document {
  role: string;
  employeeId: string;
  companyName: string;
  email: string;
  image: string;
  phone: string;
  id: string;
  leavesTaken: number;
  salary: number;
  lastPayout: Date;
  isBlocked: boolean;
}

const date = new Date();
date.setDate(date.getDate() + 1)

const employeeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    lastPayout: {
      type: Date,
      default: date
    },
    leavesTaken: {
      type: Number,
      required: true,
      default: 0,
    },
    role: {
      type: String,
      required: true,
    },
    employeeId: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: true,
    },
    isBlocked: {
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

employeeSchema.set("versionKey", "version");
employeeSchema.plugin(updateIfCurrentPlugin);

employeeSchema.statics.build = (attrs: EmployeeAttrs) => {
  return new Employee({
    role: attrs.role,
    name: attrs.name,
    email: attrs.email,
    phone: attrs.phone,
    companyName: attrs.companyName,
    employeeId: attrs.employeeId,
    image: attrs.image,
    _id: attrs.id,
  });
};

const Employee = mongoose.model<EmployeeDoc, EmployeeModal>(
  "Employee",
  employeeSchema
);

export { Employee };
