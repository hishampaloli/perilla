import {
  employeeRepository,
  leaveRepository,
  assetRepository,
  expenseRepository,
  payoutRepository,
} from "../app/repository/mongo";

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
  createAsset_UseCase,
  deleteAssets_UseCase,
  getAllAssets_UseCase,
  getSingleAsset_UseCase,
  editAssets_UseCase,
  completePayouts_usecase,
  getAllPayout_usecase,
  getMyPayouts_usecase,
  getSinglePayout_usecase,
  requestPayout_usecase,
  getMyAssetPosts_UseCase,
} from "../usecase";
import {
  createExpense_UseCase,
  deleteExpense_UseCase,
  editExpense_UseCase,
  getAllExpense_UseCase,
  getSingleExpense_UseCase,
} from "../usecase/expense";

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
  createAsset_UseCase,
  deleteAssets_UseCase,
  getAllAssets_UseCase,
  editAssets_UseCase,
  getMyAssetPosts_UseCase,
  getSingleAsset_UseCase,

  createExpense_UseCase,
  deleteExpense_UseCase,
  editExpense_UseCase,
  getAllExpense_UseCase,
  getSingleExpense_UseCase,

  completePayouts_usecase,
  getAllPayout_usecase,
  getMyPayouts_usecase,
  getSinglePayout_usecase,
  requestPayout_usecase,
};

const repository: repositoryData = {
  employeeRepository,
  leaveRepository,
  assetRepository,
  expenseRepository,
  payoutRepository,
};

export = {
  repository,
  useCases,
};
