import { tenantRepository } from "../app/repository/mongo";
import {
  createTenant_UseCase,
  getTenant_UseCase,
  getOtp_UseCase,
  verifyOtp_UseCase,
  getTenants_UseCase,
  tenantLogin_UseCase,
  getPayedTenant_UseCase,
  verifyStripe_UseCase,
  sendMail_UseCase,
  verifyFireBaseOtp_UseCase,
} from "../usecases";

const useCases: any = {
  createTenant_UseCase,
  getTenant_UseCase,
  getOtp_UseCase,
  verifyOtp_UseCase,
  getTenants_UseCase,
  tenantLogin_UseCase,
  getPayedTenant_UseCase,
  verifyStripe_UseCase,
  sendMail_UseCase,
  verifyFireBaseOtp_UseCase,
};

const repository: any = {
  tenantRepository,
};

export = {
  repository,
  useCases,
};
