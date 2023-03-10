import { DepenteniciesData } from "../../entities/interfaces";

export const getMyProjects_usecase = (dependencies: DepenteniciesData) => {
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
    pageNumber: number
  ) => {
    return projectRepository.getMyProjects(
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
