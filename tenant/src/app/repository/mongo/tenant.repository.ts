import mongoose from "mongoose";
import { Password } from "../../../libs/utils/password";

import { schemas } from "../../database/mongo";

const { Tenant } = schemas;

export = {
  createTenant: async (tenant: any) => {
    const mongooseObj = Tenant.build(tenant);
    return await mongooseObj.save();
  },

  getTenants: async () => {
    const mongooseObject = await Tenant.find({});
    return mongooseObject;
  },

  loginTenant: async (phone: number, companyName: string, password: string) => {
    const existingTenant: any = await Tenant.findOne({
      $and: [{ phone }, { companyName }],
    });

    if (existingTenant) {
      const passwordsMatch = await Password.compare(
        existingTenant.password,
        password
      );
      if (passwordsMatch) {
        return existingTenant;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },

  getTenantData: async (phone: number, companyName: string) => {
    const mongooseObject = await Tenant.findOne({
      $or: [{ phone }, { companyName }],
    });
    return mongooseObject;
  },

  getPayedTenantProfile: async (companyName: string) => {
    const mongooseObject = await Tenant.findOne({
      $and: [{ companyName }, { isPurchased: false }],
    });
    return mongooseObject;
  },

  createPaidTenant: async (paymentDetails: any, companyName: string) => {
    const mongooseObject = await Tenant.findOneAndUpdate(
      { $and: [{ companyName }, { isPurchased: false }] },
      { isPurchased: true, $push: { paymentDetails: paymentDetails } },
      { new: true }
    );
    return mongooseObject;
  },

  resetPassword: async (
    phone: number,
    companyName: string,
    oldPassword: string,
    password: string
  ) => {
    const existingTenant = await Tenant.findOne({
      $and: [{ phone }, { companyName }],
    });

    if (existingTenant) {
      const passwordsMatch = await Password.compare(
        existingTenant.password,
        oldPassword
      );
      if (passwordsMatch) {
        existingTenant.password = password;

        return await existingTenant.save();
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
};
