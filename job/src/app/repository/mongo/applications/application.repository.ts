import { ApplicationData } from "../../../../entities/Application";
import { schemas } from "../../../database/mongo";
const { Application } = schemas;

export = {
  createApplication: async (data: ApplicationData) => {
    console.log(data);
    const mongooseObj = Application.build(data);
    return mongooseObj.save();
  },

  getAllApplication: async (companyName: string, status: string) => {
    const mongooseObj = await Application.aggregate([
      { $match: { $and: [{ companyName }, { status }] } },
    ]);
    await Application.populate(mongooseObj, { path: "jobId" });
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
    await Application.populate(mongooseObj, { path: "jobId" });
    return mongooseObj;
  },

  viewApplicationAdmin: async (companyName: string, applicationId: string) => {
    const mongooseObj = await Application.findOne({
      $and: [{ companyName }, { _id: applicationId }],
    });
    await Application.populate(mongooseObj, { path: "jobId" });
    return mongooseObj;
  },

  viewMyApplication: async (email: string, applicationId: string) => {
    const mongooseObj = await Application.findOne({
      $and: [{ email }, { _id: applicationId }],
    });
    await Application.populate(mongooseObj, { path: "jobId" });
    return mongooseObj;
  },

  changeApplicationStatus: async (
    companyName: string,
    applicationId: string,
    status: string
  ) => {
    const mongooseObj = await Application.findOneAndUpdate(
      {
        $and: [{ companyName }, { _id: applicationId }],
      },
      { status },
      { new: true, runValidators: true }
    );
    await Application.populate(mongooseObj, { path: "jobId" });
    return mongooseObj;
  },
};
