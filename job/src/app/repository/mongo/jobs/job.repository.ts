import { JobData } from "../../../../entities/Jobs";
import { schemas } from "../../../database/mongo";
const { Job } = schemas;

export = {
  createJob: async (data: JobData) => {
    console.log(data);

    const mongooseObj = Job.build(data);
    return mongooseObj.save();
  },

  getAllJobs: async (
    companyName: string,
    pageNumber: number,
    status: string
  ) => {
    const pageSize = 5;
    const page = pageNumber ? pageNumber : 1;

    const mongooseObj = await Job.aggregate([
      { $match: { $and: [{ companyName }, { status }] } },
      { $skip: pageSize * (page - 1) },
      { $limit: pageSize },
    ]);
    
    return mongooseObj;
  },

  getSingleJob: async (jobId: string) => {
    const mongooseObj = await Job.findById(jobId);

    await Job.populate(mongooseObj, { path: "applications" });
    return mongooseObj;
  },

  editJob: async (companyName: string, jobId: string, data: any) => {
    const mongooseObj = await Job.findOneAndUpdate(
      {
        $and: [{ companyName }, { _id: jobId }],
      },
      data,
      { new: true, runValidators: true }
    );
    await Job.populate(mongooseObj, { path: "applications" });
    return mongooseObj;
  },

  addApplicants: async (
    companyName: string,
    jobId: string,
    applicationId: string
  ) => {
    const mongooseObj = await Job.findOneAndUpdate(
      {
        $and: [{ companyName }, { _id: jobId }],
      },
      { $addToSet: { applications: applicationId } },
      { new: true, runValidators: true }
    );
    return mongooseObj;
  },
};
