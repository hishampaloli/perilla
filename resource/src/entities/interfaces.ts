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

  createAsset_UseCase: any;
  deleteAssets_UseCase: any;
  getAllAssets_UseCase: any;
  getSingleAsset_UseCase: any;
  editAssets_UseCase: any;
  getMyAssetPosts_UseCase: any;

  createExpense_UseCase: any;
  deleteExpense_UseCase: any;
  editExpense_UseCase: any;
  getAllExpense_UseCase: any;
  getMyExpensePosts_UseCase: any;
  getSingleExpense_UseCase: any;

  completePayouts_usecase: any;
  getAllPayout_usecase: any;
  getMyPayouts_usecase: any;
  getSinglePayout_usecase: any;
  requestPayout_usecase: any;
}

export interface repositoryData {
  employeeRepository: any;
  leaveRepository: any;
  assetRepository: any;
  expenseRepository: any;
  payoutRepository: any;
}
