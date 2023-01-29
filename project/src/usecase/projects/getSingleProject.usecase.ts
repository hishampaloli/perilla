import { DepenteniciesData } from "../../entities/interfaces";

export const getSingleProject_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { projectRepository },
  } = dependencies;

  if (!projectRepository)
    throw new Error("The Project repository should be a dependencie");

  const execute = (id: string) => {
    return projectRepository.getSingleProject(id);
  };
  return {
    execute,
  };
};
