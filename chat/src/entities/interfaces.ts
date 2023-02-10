export interface DepenteniciesData {
  useCases: useCaseData;
  repository: repositoryData;
}

export interface useCaseData {
  createEmployee_UseCase: any;
  getAllEmployee_UseCase: any;
  editEmployees_UseCase: any;
}

export interface repositoryData {
  employeeRepository: any;
  roomRepository: any;
  chatRepository: any;
}
