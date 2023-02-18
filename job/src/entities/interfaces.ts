export interface DepenteniciesData {
  useCases: useCaseData;
  repository: repositoryData;
}

export interface useCaseData {
  createJob_UseCase: any;
  editJob_UseCase: any;
  getAllJobs_UseCase: any;
  getSingleJob_UseCase: any;
  createApplication_UseCase: any;
  addApplications_UseCase: any;

  changeApplicationStatus_UseCase: any;
  getAllApplications_UseCase: any;
  getMyApplications_UseCase: any;
  viewApplicationAdmin_UseCase: any;
  viewMyApplication_UseCase: any;
}

export interface repositoryData {
  jobRepository: any;
  applicationRepository: any;
}
