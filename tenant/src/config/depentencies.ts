import { tenantRepository, dashboardRepository } from "../app/repository/mongo";
import {
  createTenant_UseCase,
  getTenant_UseCase,
  getTwilioOtp_UseCase,
  verifyOtp_UseCase,
  getTenants_UseCase,
  tenantLogin_UseCase,
  getPayedTenant_UseCase,
  verifyStripe_UseCase,
  sendMail_UseCase,
  verifyFireBaseOtp_UseCase,
  resetPassword_UseCase,
  createDashboard_UseCase,
  editDashboard_UseCase,
  getDashboard_UseCase,
} from "../usecases";

const useCases: any = {
  createTenant_UseCase,
  getTenant_UseCase,
  getTwilioOtp_UseCase,
  verifyOtp_UseCase,
  getTenants_UseCase,
  tenantLogin_UseCase,
  getPayedTenant_UseCase,
  verifyStripe_UseCase,
  sendMail_UseCase,
  verifyFireBaseOtp_UseCase,
  resetPassword_UseCase,
  createDashboard_UseCase,
  getDashboard_UseCase,
  editDashboard_UseCase,
};

const repository: any = {
  tenantRepository,
  dashboardRepository,
};

export = {
  repository,
  useCases,
};
