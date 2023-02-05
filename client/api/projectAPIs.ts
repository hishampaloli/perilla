import { projectService_Url } from "./baseURLs";
import buildClient from "./buildClient";
import { config } from "../redux/constants/config";
import { ClientDataArr, CLientDataObj } from "../models/admin";
import {
  CreateProjectData,
  EditProjectData,
  ProjectDataArr,
  ProjectDataObj,
  TaskDataArr,
  TaskDataObj,
} from "../models/project";

export const addClient__API = (req: any, clientDetails: object) =>
  buildClient(req).post<CLientDataObj>(
    `${projectService_Url}/client/addClient`,
    clientDetails,
    config
  );

export const getAllClients_API = (
  req: any,
  {
    name = "",
    clientId = "",
    pageNumber = 1,
  }: { name?: string; clientId?: string; pageNumber?: number }
) =>
  buildClient(req).get<ClientDataArr>(
    `${projectService_Url}/client/allClients?clientName=${name}&clientId=${clientId}&pageNumber=${pageNumber}`,
    config
  );

export const addTask__API = (req: any, taskData: object) =>
  buildClient(req).post<TaskDataObj>(
    `${projectService_Url}/task/create`,
    taskData,
    config
  );

export const addTeamToProject__API = (
  req: any,
  employeeId: string,
  projectId: string
) =>
  buildClient(req).put<ProjectDataObj>(
    `${projectService_Url}/project/addTeam/${projectId}`,
    { employeeId },
    config
  );

export const approvedTask__API = (req: any, taskId: any, status: boolean) =>
  buildClient(req).patch<any>(
    `${projectService_Url}/task/approveTask/${taskId}?status=${status}`,
    config
  );

export const completeProject__API = (
  req: any,
  status: string,
  projectId: any
) =>
  buildClient(req).patch<ProjectDataObj>(
    `${projectService_Url}/project/completeProject/${projectId}?status=${status}`,
    config
  );

export const createProjects__API = (req: any, projectData: CreateProjectData) =>
  buildClient(req).post<ProjectDataObj>(
    `${projectService_Url}/project/create?status=${status}`,
    projectData,
    config
  );

export const editProjects__API = (
  req: any,
  projectData: EditProjectData,
  projectId: string
) =>
  buildClient(req).put<ProjectDataObj>(
    `${projectService_Url}/project/${projectId}`,
    projectData,
    config
  );

export const editTask__API = (req: any, taskData: any, taskId: string) =>
  buildClient(req).put<TaskDataObj>(
    `${projectService_Url}/task/edit/${taskId}`,
    taskData,
    config
  );

export const getAllProjects__API = (
  req: any,
  {
    status,
    type,
    name = "",
    pageNumber,
  }: { status: string; type: string; name?: string; pageNumber?: number }
) =>
  buildClient(req).get<ProjectDataArr>(
    `${projectService_Url}/project/allProjects?status=${status}&projectName=${name}&pageNumber=${pageNumber}`,
    config
  );

export const getAllMyProjects__API = (
  req: any,
  {
    status,
    type,
    name = "",
    pageNumber,
  }: { status: string; type: string; name?: string; pageNumber?: number }
) =>
  buildClient(req).get<ProjectDataArr>(
    `${projectService_Url}/project/myProjects?status=${status}&projectName=${name}&pageNumber=${pageNumber}`,
    config
  );

export const projectsUnserUser__API = (req: any, employeeId: string) =>
  buildClient(req).get<ProjectDataArr>(
    `${projectService_Url}/project/projectUnderUser/${employeeId}`,
    config
  );

export const projectsUnserClient__API = (req: any, employeeId: string) =>
  buildClient(req).get<ProjectDataArr>(
    `${projectService_Url}/project/projectUnderClient/${employeeId}`,
    config
  );

export const getMyTasks__API = async (
  req: any,
  status: boolean,
  user: string,
  name: string = "",
  pageNumber: number = 1
) => {
  return await buildClient(req).get<TaskDataArr>(
    user === "employee"
      ? `${projectService_Url}/task/myTasks?isApproved=${status}&taskName=${name}&pageNumber=${pageNumber}`
      : user === "hr"
      ? `${projectService_Url}/task/myTaskPosts?isApproved=${status}&taskName=${name}&pageNumber=${pageNumber}`
      : user === "approval"
      ? `${projectService_Url}/task/tasksForApproval`
      : `${projectService_Url}/task/allTasks?isApproved=${status}&taskName=${name}&pageNumber=${pageNumber}`,
    config
  );
};

export const getSingleProject__API = (req: any, projectId: string | string[]) =>
  buildClient(req).get<ProjectDataObj>(
    `${projectService_Url}/project/${projectId}`,
    config
  );

export const getSingleTask__API = (req: any, taskId: string | string[]) =>
  buildClient(req).get<TaskDataObj>(
    `${projectService_Url}/task/singleTask/${taskId}`,
    config
  );

export const getTaskUnderProject__API = (
  req: any,
  projectId: string | string[],
  status: boolean
) =>
  buildClient(req).get<TaskDataArr>(
    `${projectService_Url}/task/allProjectTask/${projectId}?isApproved=${status}`,
    config
  );

export const removeTeamFromProject__API = (
  req: any,
  employeeId: string,
  projectId: any
) =>
  buildClient(req).put<ProjectDataObj>(
    `${projectService_Url}/project/removeTeam/${projectId}`,
    { employeeId },
    config
  );

export const requestTaskApproval__API = (req: any, taskId: any) =>
  buildClient(req).patch<any>(
    `${projectService_Url}/task/isCompleted/${taskId}`,

    config
  );
