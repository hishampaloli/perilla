import { DepenteniciesData } from "../../entities/interfaces";

export const getProjectsUnderUser_usecase = (
  dependencies: DepenteniciesData
) => {
  const {
    repository: { projectRepository },
  } = dependencies;

  if (!projectRepository)
    throw new Error("The Project repository should be a dependencie");

  const execute = (companyName: string, userId: string) => {
    return projectRepository.getProjectUnderUser(companyName, userId);
  };
  return {
    execute,
  };
};
