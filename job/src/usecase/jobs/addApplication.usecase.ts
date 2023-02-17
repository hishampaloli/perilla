import { Job, JobData } from "../../entities/Jobs";
import { DepenteniciesData } from "../../entities/interfaces";

export const addApplications_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { jobRepository },
  } = dependencies;

  if (!jobRepository)
    throw new Error("The Job repository should be a dependencie");

  const execute = (
    companyName: string,
    jobId: string,
    applicationId: string
  ) => {
    return jobRepository.addApplicants(companyName, jobId, applicationId);
  };
  return {
    execute,
  };
};
