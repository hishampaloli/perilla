import { clientRepository } from "../app/repository/mongo";
import {
  createClient_UseCase,
  getAllClient_UseCase,
  getClient_UseCase,
  editClient_UseCase,
} from "../usecase";

import { repositoryData, useCaseData } from "../entities/interfaces";

const useCases: useCaseData = {
  createClient_UseCase,
  getAllClient_UseCase,
  getClient_UseCase,
  editClient_UseCase,
};

const repository: repositoryData = {
  clientRepository,
};

export = {
  repository,
  useCases,
};
