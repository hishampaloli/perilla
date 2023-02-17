import { Application, ApplicationData } from "../../entities/Application";
import { DepenteniciesData } from "../../entities/interfaces";

export const createApplication_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { applicationRepository },
  } = dependencies;

  if (!applicationRepository)
    throw new Error("The Job repository should be a dependencie");

  const execute = (data: ApplicationData) => {
    let application = new Application(data);
    return applicationRepository.createApplication(application);
  };
  return {
    execute,
  };
};
