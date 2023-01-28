import {
  clientRepository,
  employeeRepository,
  projectRepository,
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
};

const repository: repositoryData = {
  clientRepository,
  employeeRepository,
  projectRepository,
};

export = {
  repository,
  useCases,
};
