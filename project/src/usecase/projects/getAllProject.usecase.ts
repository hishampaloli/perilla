import { DepenteniciesData } from "../../entities/interfaces";

export const getAllProject_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { projectRepository },
  } = dependencies;

  if (!projectRepository)
    throw new Error("The Project repository should be a dependencie");

  const execute = (
    companyName: string,
    status: string,
    userId: string,
    projectName: string,
    pageNumber: string
  ) => {
    return projectRepository.getAllProjects(
      companyName,
      status,
      userId,
      projectName,
      pageNumber
    );
  };
  return {
    execute,
  };
};
