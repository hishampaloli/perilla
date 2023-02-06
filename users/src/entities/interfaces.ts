export interface DepenteniciesData {
  useCases: useCaseData;
  repository: repositoryData;
}

export interface useCaseData {
  createEmployee_UseCase: any;
  getEmployee_UseCase: any;
  createEmployeeData_UseCase: any;
  getAllEmployees_UseCase: any;
  editEmployees_UseCase: any;
  employeeLogin_UseCase: any;
  getTwilioOtp_UseCase: any;
  verifyTwilioOtp_UseCase: any;
  getMyProfileData_UseCase: any;
  editPersonalInfo_UseCase: any;
  editEmergencyContact_UseCase: any;
  getBankDetails_UseCase: any;
  editBankDetails_UseCase: any;
  getAllBankDetailsApprovalRequest_UseCase: any;
  createNotification_UseCase: any;
  getMyNotification_UseCase: any;
  deleteMyNotification_UseCase: any;
  editSalary_UseCase: any;
  getSalaryDetails_UseCase: any;
  uploadProfilePic_UseCase: any;
}

export interface repositoryData {
  employeeRepository: any;
}
