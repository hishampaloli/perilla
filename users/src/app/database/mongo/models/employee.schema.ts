import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";
import { Password } from "../../../externalServices/password";

interface EmployeeAttrs {
  role: string;
  name: string;
  email: string;
  password: string;
  phone: number;
  employeeId: string;
  joiningDate: string;
  designation: string;
  image: string;
  company: string;
}

interface EmployeeModal extends mongoose.Model<EmployeeDoc> {
  build(attrs: EmployeeAttrs): EmployeeDoc;
}

interface EmployeeDoc extends mongoose.Document {
  role: string;
  name: string;
  email: string;
  phone: number;
  password: string;
  employeeId: string;
  image: string;
  joiningDate: string;
  designation: string;
  personalInformation: string;
  bankDetails: string;
  companyName: string;
  emergencyContact: string;
  id: string;
  taskCompleted: string[];
  projectCompleted: string[];
  salaryDetails: string;
  bucketKey: string;
  isBlocked: boolean;
}

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
    password: {
      type: String,
      required: true,
    },
    bucketKey: {
      type: String,
    },
    phone: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    employeeId: {
      type: String,
      required: true,
    },
    joiningDate: {
      type: Date,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    personalInformation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PersonalInfo",
    },
    bankDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BankDetail",
    },
    emergencyContact: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EmergencyContact",
    },
    salaryDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SalaryDetails",
    },
    companyName: {
      type: String,
      required: true,
    },
    isBlocked: {
      type: Boolean,
      required: true,
      default: false,
    },
    projectCompleted: {
      type: Array,
    },
    taskCompleted: {
      type: Array,
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

employeeSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

employeeSchema.set("versionKey", "version");
employeeSchema.plugin(updateIfCurrentPlugin);

employeeSchema.statics.build = (attrs: EmployeeAttrs) => {
  return new Employee({
    role: attrs.role,
    name: attrs.name,
    email: attrs.email,
    password: attrs.password,
    phone: attrs.phone,
    employeeId: attrs.employeeId,
    joiningDate: attrs.joiningDate,
    designation: attrs.designation,
    companyName: attrs.company,
    image: attrs.image,
  });
};

const Employee = mongoose.model<EmployeeDoc, EmployeeModal>(
  "Employee",
  employeeSchema
);

export { Employee };
