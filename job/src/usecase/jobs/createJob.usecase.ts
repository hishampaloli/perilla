import { Job, JobData } from "../../entities/Jobs";
import { DepenteniciesData } from "../../entities/interfaces";

export const createJob_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { jobRepository },
  } = dependencies;

  if (!jobRepository)
    throw new Error("The Job repository should be a dependencie");

  const execute = (data: JobData) => {
    let job = new Job(data);
    return jobRepository.createJob(job);
  };
  return {
    execute,
  };
};