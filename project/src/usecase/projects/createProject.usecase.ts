import { Project, ProjectData } from "../../entities/Project";
import { DepenteniciesData } from "../../entities/interfaces";

export const createProject_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { projectRepository },
  } = dependencies;

  if (!projectRepository)
    throw new Error("The Project repository should be a dependencie");

  const execute = (data: ProjectData) => {
    let project = new Project(data);
    return projectRepository.createProject(project);
  };
  return {
    execute,
  };
};
