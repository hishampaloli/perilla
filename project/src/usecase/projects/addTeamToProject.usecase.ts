import { DepenteniciesData } from "../../entities/interfaces";

export const addTeamToProject_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { projectRepository },
  } = dependencies;

  if (!projectRepository)
    throw new Error("The Project repository should be a dependencie");

  const execute = (
    projectId: string,
    employeeId: string,
    createdBy: string
  ) => {
    return projectRepository.addTeamToProject(projectId, employeeId, createdBy);
  };
  return {
    execute,
  };
};
