import { DepenteniciesData } from "../../entities/interfaces";

export const getSingleJob_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { jobRepository },
  } = dependencies;

  if (!jobRepository)
    throw new Error("The Job repository should be a dependencie");

  const execute = (jobId: string) => {
    return jobRepository.getSingleJob(jobId);
  };
  return {
    execute,
  };
};
