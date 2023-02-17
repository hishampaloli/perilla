import { jobService_Url } from "./baseURLs";
import buildClient from "./buildClient";
import { config } from "../redux/constants/config";
import { JobDataArr, JobDataObj } from "../models/job";

export const createJob__API = (req: any, data: any) =>
  buildClient(req).post<JobDataObj>(
    `${jobService_Url}/createJob`,
    data,
    config
  );

export const allJob__API = (req: any, companyName: string, status: string) =>
  buildClient(req).get<JobDataArr>(
    `${jobService_Url}/allJobs?companyName=${companyName}&status=${status}`,
    config
  );

export const singleJob__API = (req: any, jobId: string) =>
  buildClient(req).get<JobDataObj>(
    `${jobService_Url}/singleJob/${jobId}`,
    config
  );

export const editJob__API = (req: any, jobId: string, data: any) =>
  buildClient(req).put<JobDataObj>(
    `${jobService_Url}/editJob/${jobId}`,
    data,
    config
  );
