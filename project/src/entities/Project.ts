export interface ProjectData {
  companyName: string;
  projectName: string;
  client: string;
  startDate: Date;
  priority: string;
  projectDescription: string;
  rate: number;
  createdBy: string;
}

export class Project {
  companyName: string;
  projectName: string;
  client: string;
  startDate: Date;
  priority: string;
  projectDescription: string;
  rate: number;
  createdBy: string;

  constructor({
    companyName,
    client,
    createdBy,
    priority,
    projectDescription,
    projectName,
    rate,
    startDate,
  }: ProjectData) {
    this.companyName = companyName;
    this.client = client;
    this.createdBy = createdBy;
    this.priority = priority;
    this.projectDescription = projectDescription;
    this.projectName = projectName;
    this.rate = rate;
    this.startDate = startDate;
  }
}
