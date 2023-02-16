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
  status: string;
  experience: string;
  vacancy: number;
  location: string;
  applicationQuestions: string[];
}

export class Job {
  companyName: string;
  jobTitle: string;
  jobDesignation: string;
  lastDate: Date;
  status: string;
  jobDescription: string;
  jobKeyRoles: string[];
  jobType: string;
  salaryFrom: number;
  salaryTo: number;
  experience: string;
  vacancy: number;
  location: string;
  applicationQuestions: string[];
  constructor({
    companyName,
    jobTitle,
    jobDesignation,
    lastDate,
    jobDescription,
    jobKeyRoles,
    jobType,
    status,
    salaryFrom,
    salaryTo,
    experience,
    vacancy,
    location,
    applicationQuestions,
  }: JobData) {
    this.companyName = companyName;
    this.jobTitle = jobTitle;
    this.jobDesignation = jobDesignation;
    this.lastDate = lastDate;
    this.jobDescription = jobDescription;
    this.jobKeyRoles = jobKeyRoles;
    this.jobType = jobType;
    this.salaryFrom = salaryFrom;
    this.salaryTo = salaryTo;
    this.experience = experience;
    this.vacancy = vacancy;
    this.location = location;
    this.status = status;
    this.applicationQuestions = applicationQuestions;
  }
}
