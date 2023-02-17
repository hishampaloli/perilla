import { ErrorState } from "./tenants";

export interface JobData {
  companyName: string;
  jobTitle: string;
  jobDesignation: string;
  lastDate: Date;
  jobDescription: string;
  jobKeyRoles: string[];
  jobType: string;
  salaryFrom: number;
  salaryTo: number;
  experience: string;
  status: string;
  vacancy: number;
  location: string;
  startDate: Date;
  _id?: string;
  id?: string;
  applications: string[];
  applicationQuestions: string[];
}

export interface JobDataObj {
  data: JobData;
}

export interface JobDataArr {
  data: JobData[];
}

export interface PostJobState {
  loading: boolean;
  error: ErrorState[] | null;
  data: JobDataObj | null;
}

export interface GetAllJobsState {
  loading: boolean;
  error: ErrorState[] | null;
  data: JobDataArr | null;
}

export interface GetSingleJobState {
  loading: boolean;
  error: ErrorState[] | null;
  data: JobDataObj | null;
}

export interface EditJobState {
  loading: boolean;
  error: ErrorState[] | null;
}
