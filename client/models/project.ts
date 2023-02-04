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

export interface TaskData {
  project: string;
  taskName: string;
  taskDescription: string;
  assignedTo: EmployeeData;
  startDate: string;
  priority: string;
  deadline: string;
  isApproved: string;
  assignedBy: EmployeeData;
  isCompleted: string;
  id: string;
}

export interface TaskDataArr {
  data: TaskData[];
}

export interface TaskDataObj {
  data: TaskData;
}

export interface ProjectDataArr {
  data: ProjectData[];
  page: number;
  pages: number;
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

export interface GetMyProjectsState {
  loading: boolean;
  error: ErrorState[] | null;
  data: ProjectDataArr | null;
}

export interface GetAllTaskUnderProjectState {
  loading: boolean;
  error: ErrorState[] | null;
  data: TaskDataArr | null;
}

export interface AddTaskState {
  loading: boolean;
  error: ErrorState[] | null;
}

export interface GetSingleTaskState {
  loading: boolean;
  error: ErrorState[] | null;
  data: TaskDataObj | null;
}

export interface RequestTaskApprovalState {
  loading: boolean;
  error: ErrorState[] | null;
}

export interface ApproveTaskState {
  loading: boolean;
  error: ErrorState[] | null;
}

export interface GetMyTasksState {
  loading: boolean;
  error: ErrorState[] | null;
  data: TaskDataArr | null;
}

export interface EditTaskState {
  loading: boolean;
  error: ErrorState[] | null;
}
