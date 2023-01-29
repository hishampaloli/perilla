import { DepenteniciesData } from "../../entities/interfaces";

export const reqTaskApprovel_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { taskRepository },
  } = dependencies;

  if (!taskRepository)
    throw new Error("The Task repository should be a dependencie");

  const execute = (taskId: string, assignedTo: string) => {
    return taskRepository.reqTaskApprovel(taskId, assignedTo);
  };
  return {
    execute,
  };
};
