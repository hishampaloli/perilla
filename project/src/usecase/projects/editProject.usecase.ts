import { DepenteniciesData } from "../../entities/interfaces";

export const editProject_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { projectRepository },
  } = dependencies;

  if (!projectRepository)
    throw new Error("The Project repository should be a dependencie");

  const execute = (projectId: string, userId: string, data: object) => {
    return projectRepository.editProject(projectId, userId, data);
  };
  return {
    execute,
  };
};
