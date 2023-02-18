import { DepenteniciesData } from "../../entities/interfaces";

export const viewMyApplication_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { applicationRepository },
  } = dependencies;

  if (!applicationRepository)
    throw new Error("The Job repository should be a dependencie");

  const execute = (companyName: string, applicationId: string) => {
    return applicationRepository.viewMyApplication(companyName, applicationId);
  };
  return {
    execute,
  };
};
