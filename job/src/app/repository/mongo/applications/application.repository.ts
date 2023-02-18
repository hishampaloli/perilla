import { ApplicationData } from "../../../../entities/Application";
import { schemas } from "../../../database/mongo";
const { Application } = schemas;

export = {
  createApplication: async (data: ApplicationData) => {
    console.log(data);
    const mongooseObj = Application.build(data);
    return mongooseObj.save();
  },

  getAllApplication: async (
    companyName: string,
    jobId: string,
    status: string
  ) => {
    const mongooseObj = await Application.aggregate([
      { $match: { $and: [{ companyName }, { jobId }, { status }] } },
    ]);
    return mongooseObj;
  },

  getMyApplication: async (
    companyName: string,
    email: string,
    status: string
  ) => {
    const mongooseObj = await Application.aggregate([
      { $match: { $and: [{ companyName }, { email }, { status }] } },
    ]);
    return mongooseObj;
  },

  viewApplicationAdmin: async (companyName: string, applicationId: string) => {
    const mongooseObj = await Application.findOne({
      $and: [{ companyName }, { _id: applicationId }],
    });
    return mongooseObj;
  },

  viewMyApplication: async (email: string, applicationId: string) => {
    const mongooseObj = await Application.findOne({
      $and: [{ email }, { _id: applicationId }],
    });
    return mongooseObj;
  },};
