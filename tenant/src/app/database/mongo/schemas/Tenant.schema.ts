import mongoose from "mongoose";
import { Password } from "../../../../libs/utils/password";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface TenantAttrs {
  companyName: string;
  adminName: string;
  phone: number;
  email: string;
  country: string;
  city: string;
  postalCode: number;
  address: string;
  password: string;
  isPurchased: boolean;
  paymentDetails: string;
  purchaseDate: Date;
}

interface TenantModal extends mongoose.Model<TenantDoc> {
  build(attrs: TenantAttrs): TenantDoc;
}

interface TenantDoc extends mongoose.Document {
  companyName: string;
  adminName: string;
  phone: number;
  email: string;
  country: string;
  city: string;
  postalCode: number;
  address: string;
  password: string;
  paymentDetails: string;
  purchaseDate: Date;
  updatedAt: string;
  isPurchased: boolean;
  version: number;
}

const tenantSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, "Please provide a company name"],
    },
    adminName: {
      type: String,
      required: [true, "Please provide a admin name"],
    },
    phone: {
      type: Number,
      required: [true, "Please provide a valid phone number"],
    },
    email: {
      type: String,
      required: [true, "Please provide a valid email"],
    },
    country: {
      type: String,
      required: [true, "Please provide a country"],
    },
    city: {
      type: String,
      required: [true, "Please provide a city"],
    },
    postalCode: {
      type: Number,
      required: [true, "Please provide a postalCode"],
    },
    address: {
      type: String,
      required: [true, "Please provide a address"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    paymentDetails: {
      type: Array,
    },
    isPurchased: {
      type: Boolean,
      default: false,
    },
    purchaseDate: {
      type: Date,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
      },
    },
  }
);

tenantSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

tenantSchema.set("versionKey", "version");
tenantSchema.plugin(updateIfCurrentPlugin);

tenantSchema.statics.build = (attrs: TenantAttrs) => {
  return new Tenant(attrs);
};

const Tenant = mongoose.model<TenantDoc, TenantModal>("Tenant", tenantSchema);

export { Tenant };
