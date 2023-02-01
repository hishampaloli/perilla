import { DepenteniciesData } from "../../entities/interfaces";

export const getProjectsUnderClient_usecase = (
  dependencies: DepenteniciesData
) => {
  const {
    repository: { projectRepository },
  } = dependencies;

  if (!projectRepository)
    throw new Error("The Project repository should be a dependencie");

  const execute = (companyName: string, clientId: string) => {
    return projectRepository.getProjectUnderClient(companyName, clientId);
  };
  return {
    execute,
  };
};
