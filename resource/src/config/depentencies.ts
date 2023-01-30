import { employeeRepository, leaveRepository } from "../app/repository/mongo";

import {
  createEmployee_UseCase,
  editEmployees_UseCase,
  getAllEmployee_UseCase,
  getSingleEmployees_UseCase,
  applyLeave_UseCase,
  approveLeave_UseCase,
  getLeaveApplications_UseCase,
  getMyLeaveReport_UseCase,
  viewLeaveApplication_UseCase,
} from "../usecase";

import { repositoryData, useCaseData } from "../entities/interfaces";

const useCases: useCaseData = {
  createEmployee_UseCase,
  editEmployees_UseCase,
  getAllEmployee_UseCase,
  getSingleEmployees_UseCase,
  applyLeave_UseCase,
  approveLeave_UseCase,
  getLeaveApplications_UseCase,
  getMyLeaveReport_UseCase,
  viewLeaveApplication_UseCase,
};

const repository: repositoryData = {
  employeeRepository,
  leaveRepository,
};

export = {
  repository,
  useCases,
};
