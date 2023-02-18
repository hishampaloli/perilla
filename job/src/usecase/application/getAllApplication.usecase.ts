import { Application, ApplicationData } from "../../entities/Application";
import { DepenteniciesData } from "../../entities/interfaces";

export const getAllApplications_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { applicationRepository },
  } = dependencies;

  if (!applicationRepository)
    throw new Error("The Job repository should be a dependencie");

  const execute = (companyName: string, status: string) => {
    return applicationRepository.getAllApplication(companyName, status);
  };
  return {
    execute,
  };
};
