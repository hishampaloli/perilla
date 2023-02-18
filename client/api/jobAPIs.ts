import { jobService_Url } from "./baseURLs";
import buildClient from "./buildClient";
import { config } from "../redux/constants/config";
import { ApplicationArr, ApplicationObj, JobDataArr, JobDataObj } from "../models/job";

const application = "application";

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

export const applyJob__API = (req: any, data: any) =>
  buildClient(req).post<JobDataObj>(
    `${jobService_Url}/${application}/apply`,
    data,
    config
  );

export const allApplication__API = async (
  req: any,
  {
    status,
    companyName,
    verifyToken,
  }: { status: string; companyName: string; verifyToken: string }
) => {
  return verifyToken
    ? await buildClient(req).put<ApplicationArr>(
        `${jobService_Url}/${application}/myApplications`,
        { status, verifyToken, companyName },
        config
      )
    : await buildClient(req).get<ApplicationArr>(
        `${jobService_Url}/${application}/allApplications?status=${status}`,
        config
      );
};

export const singleApplication_API = async (
  req: any,
  { applicationId, verifyToken }: { applicationId: string; verifyToken: string }
) => {
  return verifyToken
    ? await buildClient(req).put<ApplicationObj>(
        `${jobService_Url}/${application}/viewMyApplication`,
        { applicationId, verifyToken },
        config
      )
    : await buildClient(req).get<ApplicationObj>(
        `${jobService_Url}/${application}/viewApplication/${applicationId}`,
        config
      );
};

export const changeApplicationStatus_API = async (
  req: any,
  status: string,
  applicationId: string
) =>
  buildClient(req).patch<ApplicationArr>(
    `${jobService_Url}/${application}/applicationStatus?status=${status}&applicationId=${applicationId}`,
    config
  );
