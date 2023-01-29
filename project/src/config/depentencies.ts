import {
  clientRepository,
  employeeRepository,
  projectRepository,
  taskRepository,
} from "../app/repository/mongo";

import {
  createClient_UseCase,
  getAllClient_UseCase,
  getClient_UseCase,
  editClient_UseCase,
  createEmployee_UseCase,
  getAllEmployee_UseCase,
  editEmployees_UseCase,
  createProject_UseCase,
  getAllProject_UseCase,
  getSingleProject_UseCase,
  addTeamToProject_UseCase,
  editProject_UseCase,
  removeTeamFromProject_UseCase,
  getSingleEmployees_UseCase,
  createTask_UseCase,
} from "../usecase";

import { repositoryData, useCaseData } from "../entities/interfaces";

const useCases: useCaseData = {
  createClient_UseCase,
  getAllClient_UseCase,
  getClient_UseCase,
  editClient_UseCase,
  createEmployee_UseCase,
  getAllEmployee_UseCase,
  editEmployees_UseCase,
  createProject_UseCase,
  getAllProject_UseCase,
  getSingleProject_UseCase,
  addTeamToProject_UseCase,
  editProject_UseCase,
  removeTeamFromProject_UseCase,
  getSingleEmployees_UseCase,
  createTask_UseCase,
};

const repository: repositoryData = {
  clientRepository,
  employeeRepository,
  projectRepository,
  taskRepository,
};

export = {
  repository,
  useCases,
};
