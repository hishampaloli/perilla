import mongoose from "mongoose";

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

  getTenantData: async (phone: number) => {
    const mongooseObject = await Tenant.findOne({ phone });
    return mongooseObject;
  },
};
