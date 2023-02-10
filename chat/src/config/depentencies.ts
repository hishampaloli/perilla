import {
  employeeRepository,
  roomRepository,
  chatRepository,
} from "../app/repository/mongo";

import {
  createEmployee_UseCase,
  getAllEmployee_UseCase,
  editEmployees_UseCase,
} from "../usecase";

import { repositoryData, useCaseData } from "../entities/interfaces";

const useCases: useCaseData = {
  createEmployee_UseCase,
  getAllEmployee_UseCase,
  editEmployees_UseCase,
};

const repository: repositoryData = {
  employeeRepository,
  roomRepository,
  chatRepository,
};

export = {
  repository,
  useCases,
};
