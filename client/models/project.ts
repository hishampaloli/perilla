import { ErrorState } from "./tenants";
import { EmployeeProfileDataObj } from "./profile";
export interface EmployeeData {
  email: string;
  name: string;
  phone: number;
  image: string;
  role: string;
  employeeId: string;
  isBlocked: boolean;
  companyName: string;
  id: string;
}
export interface ProjectData {
  companyName: string;
  projectName: string;
  client: string;
  startDate: Date;
  priority: string;
  projectDescription: string;
  rate: number;
  team: EmployeeData[];
  createdBy: EmployeeData;
  status: string;
  id: string;
}

export interface CreateProjectData {
  projectName: string;
  client: string;
  startDate: Date;
  priority: string;
  projectDescription: string;
  rate: number;
}

export interface EditProjectData {
  projectName: string;
  startDate: Date;
  priority: string;
  projectDescription: string;
  rate: number;
}

export interface ProjectDataArr {
  data: ProjectData[];
}

export interface ProjectDataObj {
  data: ProjectData;
}

export interface GetAllProjectsState {
  data: ProjectDataArr | null;
  loading: boolean;
  error: ErrorState[] | null;
}

export interface CreateProjectsState {
  loading: boolean;
  error: ErrorState[] | null;
}

export interface EditProjectState {
  loading: boolean;
  error: ErrorState[] | null;
}

export interface AddTeamToProjectState {
  loading: boolean;
  error: ErrorState[] | null;
}

export interface RemoveTeamFromProjectState {
  loading: boolean;
  error: ErrorState[] | null;
}

export interface GetSingleProjectState {
  loading: boolean;
  data: ProjectDataObj | null;
  error: ErrorState[] | null;
}

export interface CompleteProjectState {
  loading: boolean;
  error: ErrorState[] | null;
}
