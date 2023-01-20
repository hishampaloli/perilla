export interface DepenteniciesData {
  useCases: useCaseData;
  repository: repositoryData;
}

export interface useCaseData {
  createClient_UseCase: any;
  getAllClient_UseCase: any;
  getClient_UseCase: any;
  editClient_UseCase: any;
}

export interface repositoryData {
  clientRepository: any;
}
