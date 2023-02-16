import { DepenteniciesData } from "../../entities/interfaces";

export const editJob_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { jobRepository },
  } = dependencies;

  if (!jobRepository)
    throw new Error("The Job repository should be a dependencie");

  const execute = (companyName: string, jobId: string, data: any) => {
    return jobRepository.editJob(companyName, jobId, data);
  };
  return {
    execute,
  };
};
