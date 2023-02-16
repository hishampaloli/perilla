import { DepenteniciesData } from "../../entities/interfaces";

export const getAllJobs_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { jobRepository },
  } = dependencies;

  if (!jobRepository)
    throw new Error("The Job repository should be a dependencie");

  const execute = (companyName: string, pageNumber: number, status: string) => {
    return jobRepository.getAllJobs(companyName, pageNumber, status);
  };
  return {
    execute,
  };
};
