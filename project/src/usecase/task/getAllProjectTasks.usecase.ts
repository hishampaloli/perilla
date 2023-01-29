import { DepenteniciesData } from "../../entities/interfaces";

export const getAllProjectTasks_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { taskRepository },
  } = dependencies;

  if (!taskRepository)
    throw new Error("The Task repository should be a dependencie");

  const execute = (projectId: string, isApproved: boolean) => {
    return taskRepository.getAllProjectTask(projectId, isApproved);
  };
  return {
    execute,
  };
};
