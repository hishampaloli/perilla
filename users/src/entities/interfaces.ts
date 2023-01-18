export interface DepenteniciesData {
  useCases: useCaseData;
  repository: repositoryData;
}

export interface useCaseData {
  createEmployee_UseCase: any;
  getEmployee_UseCase: any;
  createEmployeeData_UseCase: any;
  getAllEmployees_UseCase: any;
  editEmployees_UseCase: any
}

export interface repositoryData {
  employeeRepository: any;
}
