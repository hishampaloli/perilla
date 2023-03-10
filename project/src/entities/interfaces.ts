export interface DepenteniciesData {
  useCases: useCaseData;
  repository: repositoryData;
}

import {clientRepository} from "../app/repository/mongo";

export interface useCaseData {
  createClient_UseCase: any;
  getAllClient_UseCase: any;
  getClient_UseCase: any;
  editClient_UseCase: any;
  createEmployee_UseCase: any;
  getAllEmployee_UseCase: any;
  editEmployees_UseCase: any;
  createProject_UseCase: any;
  getAllProject_UseCase: any;
  getSingleProject_UseCase: any;
  addTeamToProject_UseCase: any;
  editProject_UseCase: any;
  removeTeamFromProject_UseCase: any;
  getSingleEmployees_UseCase: any;
  createTask_UseCase: any;
  getAllProjectTasks_UseCase: any;
  editTask_UseCase: any;
  getSingleTask_UseCase: any;
  reqTaskApprovel_UseCase: any;
  sendMail_UseCase: any;
  getTaskForApproval_UseCase: any;
  getMyProjects_usecase: any;
  getMyTasksPosts_UseCase: any;
  getMyTasks_UseCase: any;
  getProjectsUnderUser_usecase: any;
  getProjectsUnderClient_usecase: any;
  getAllTasks_UseCase: any;
}

export interface repositoryData {
  clientRepository: any;
  employeeRepository: any;
  taskRepository: any;
  projectRepository: any;
}
