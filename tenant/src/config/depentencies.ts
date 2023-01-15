import { tenantRepository } from "../app/repository/mongo";
import {
  createTenant_UseCase,
  getTenant_UseCase,
  getOtp_UseCase,
  verifyOtp_UseCase,
  getTenants_UseCase,
  tenantLogin_UseCase,
} from "../usecases";

const useCases: any = {
  createTenant_UseCase,
  getTenant_UseCase,
  getOtp_UseCase,
  verifyOtp_UseCase,
  getTenants_UseCase,
  tenantLogin_UseCase,
};

const repository: any = {
  tenantRepository,
};

export = {
  repository,
  useCases,
};
