import { jobRepository } from "../app/repository/mongo";

import {
  createJob_UseCase,
  editJob_UseCase,
  getAllJobs_UseCase,
  getSingleJob_UseCase,
} from "../usecase";

import { repositoryData, useCaseData } from "../entities/interfaces";

const useCases: useCaseData = {
  createJob_UseCase,
  editJob_UseCase,
  getAllJobs_UseCase,
  getSingleJob_UseCase,
};

const repository: repositoryData = {
  jobRepository,
};

export = {
  repository,
  useCases,
};
