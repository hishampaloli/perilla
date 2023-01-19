import { employeeRepository } from "../app/repository/mongo";
import {
  createEmployee_UseCase,
  getEmployee_UseCase,
  createEmployeeData_UseCase,
  getAllEmployees_UseCase,
  editEmployees_UseCase,
  employeeLogin_UseCase,
  getTwilioOtp_UseCase,
  verifyTwilioOtp_UseCase,
  getMyProfileData_UseCase,
  editPersonalInfo_UseCase,
  editEmergencyContact_UseCase,
  getBankDetails_UseCase,
  editBankDetails_UseCase,
  getAllBankDetailsApprovalRequest_UseCase
} from "../usecases";

import { repositoryData, useCaseData } from "../entities/interfaces";

const useCases: useCaseData = {
  createEmployee_UseCase,
  getEmployee_UseCase,
  createEmployeeData_UseCase,
  getAllEmployees_UseCase,
  editEmployees_UseCase,
  employeeLogin_UseCase,
  getTwilioOtp_UseCase,
  verifyTwilioOtp_UseCase,
  getMyProfileData_UseCase,
  editPersonalInfo_UseCase,
  editEmergencyContact_UseCase,
  getBankDetails_UseCase,
  editBankDetails_UseCase,
  getAllBankDetailsApprovalRequest_UseCase

};

const repository: repositoryData = {
  employeeRepository,
};

export = {
  repository,
  useCases,
};
