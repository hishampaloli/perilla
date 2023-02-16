export interface DepenteniciesData {
  useCases: useCaseData;
  repository: repositoryData;
}

export interface useCaseData {
  createJob_UseCase: any;
  editJob_UseCase: any;
  getAllJobs_UseCase: any;
  getSingleJob_UseCase: any;
}

export interface repositoryData {
  jobRepository: any;
}
