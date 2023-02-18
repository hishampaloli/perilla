import { Application, ApplicationData } from "../../entities/Application";
import { DepenteniciesData } from "../../entities/interfaces";

export const getMyApplications_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { applicationRepository },
  } = dependencies;

  if (!applicationRepository)
    throw new Error("The Job repository should be a dependencie");

  const execute = (companyName: string, email: string, status: string) => {
    return applicationRepository.getMyApplication(companyName, email, status);
  };
  return {
    execute,
  };
};
