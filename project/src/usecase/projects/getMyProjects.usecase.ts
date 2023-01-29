import { DepenteniciesData } from "../../entities/interfaces";

export const getMyProjects_usecase = (dependencies: DepenteniciesData) => {

  const {
    repository: { projectRepository },
  } = dependencies;

  if (!projectRepository)
    throw new Error("The Project repository should be a dependencie");

  const execute = (companyName: string, status: string, userId: string) => {
    return projectRepository.getMyProjects(companyName, status, userId);
  };
  return {
    execute,
  };
};
