import { jobRepository, applicationRepository } from "../app/repository/mongo";

import {
  createJob_UseCase,
  editJob_UseCase,
  getAllJobs_UseCase,
  getSingleJob_UseCase,
  createApplication_UseCase,
  addApplications_UseCase,
} from "../usecase";

import { repositoryData, useCaseData } from "../entities/interfaces";

const useCases: useCaseData = {
  createJob_UseCase,
  editJob_UseCase,
  getAllJobs_UseCase,
  getSingleJob_UseCase,
  addApplications_UseCase,
  createApplication_UseCase,
};

const repository: repositoryData = {
  jobRepository,
  applicationRepository,
};

export = {
  repository,
  useCases,
};
