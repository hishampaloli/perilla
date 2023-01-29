import { employeeRepository } from "../app/repository/mongo";

import {
  createEmployee_UseCase,
  editEmployees_UseCase,
  getAllEmployee_UseCase,
  getSingleEmployees_UseCase,
} from "../usecase";

import { repositoryData, useCaseData } from "../entities/interfaces";

const useCases: useCaseData = {
  createEmployee_UseCase,
  editEmployees_UseCase,
  getAllEmployee_UseCase,
  getSingleEmployees_UseCase,
};

const repository: repositoryData = {
  employeeRepository,
};

export = {
  repository,
  useCases,
};
