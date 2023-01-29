export interface DepenteniciesData {
  useCases: useCaseData;
  repository: repositoryData;
}

export interface useCaseData {
  createClient_UseCase: any;
  getAllClient_UseCase: any;
  getClient_UseCase: any;
  editClient_UseCase: any;
  createEmployee_UseCase: any;
  getAllEmployee_UseCase: any;
  editEmployees_UseCase: any;
  createProject_UseCase: any;
  getAllProject_UseCase: any;
  getSingleProject_UseCase: any;
  addTeamToProject_UseCase: any;
  editProject_UseCase: any;
  removeTeamFromProject_UseCase: any;
  getSingleEmployees_UseCase: any;
}

export interface repositoryData {
  clientRepository: any;
  employeeRepository: any;
  projectRepository: any;
}
