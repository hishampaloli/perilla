import { Application, ApplicationData } from "../../entities/Application";
import { DepenteniciesData } from "../../entities/interfaces";

export const viewApplicationAdmin_UseCase = (
  dependencies: DepenteniciesData
) => {
  const {
    repository: { applicationRepository },
  } = dependencies;

  if (!applicationRepository)
    throw new Error("The Job repository should be a dependencie");

  const execute = (companyName: string, applicationId: string) => {
    return applicationRepository.viewApplicationAdmin(
      companyName,
      applicationId
    );
  };
  return {
    execute,
  };
};
