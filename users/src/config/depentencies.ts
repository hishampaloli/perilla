import { employeeRepository } from "../app/repository/mongo";
import {
  createEmployee_UseCase,
  getEmployee_UseCase,
  createEmployeeData_UseCase,
  getAllEmployees_UseCase,
  editEmployees_UseCase,
} from "../usecases";

import { repositoryData, useCaseData } from "../entities/interfaces";

const useCases: useCaseData = {
  createEmployee_UseCase,
  getEmployee_UseCase,
  createEmployeeData_UseCase,
  getAllEmployees_UseCase,
  editEmployees_UseCase
};

const repository: repositoryData = {
  employeeRepository,
};

export = {
  repository,
  useCases,
};
