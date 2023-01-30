export interface DepenteniciesData {
  useCases: useCaseData;
  repository: repositoryData;
}

export interface useCaseData {
  createEmployee_UseCase: any;
  editEmployees_UseCase: any;
  getAllEmployee_UseCase: any;
  getSingleEmployees_UseCase: any;

  applyLeave_UseCase: any;
  approveLeave_UseCase: any;
  getLeaveApplications_UseCase: any;
  getMyLeaveReport_UseCase: any;
  viewLeaveApplication_UseCase: any;
}

export interface repositoryData {
  employeeRepository: any;
  leaveRepository: any;
}
