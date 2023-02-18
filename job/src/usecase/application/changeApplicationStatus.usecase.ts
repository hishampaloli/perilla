import { Application, ApplicationData } from "../../entities/Application";
import { DepenteniciesData } from "../../entities/interfaces";

export const changeApplicationStatus_UseCase = (
  dependencies: DepenteniciesData
) => {
  const {
    repository: { applicationRepository },
  } = dependencies;

  if (!applicationRepository)
    throw new Error("The Job repository should be a dependencie");

  const execute = (companyName: string, jobId: string, status: string) => {
    return applicationRepository.changeApplicationStatus(
      companyName,
      jobId,
      status
    );
  };
  return {
    execute,
  };
};
