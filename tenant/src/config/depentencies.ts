import { tenantRepository } from "../app/repository/mongo";
import {
  createTenant_UseCase,
  getTenant_UseCase,
  getOtp_UseCase,
} from "../usecases";

const useCases: any = {
  createTenant_UseCase,
  getTenant_UseCase,
  getOtp_UseCase,
};

const repository: any = {
  tenantRepository,
};

export = {
  repository,
  useCases,
};
