import { DepenteniciesData } from "../../entities/interfaces";

export const getMyTasks_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { taskRepository },
  } = dependencies;

  if (!taskRepository)
    throw new Error("The Task repository should be a dependencie");

  const execute = (assignedTo: string, isApproved: boolean) => {
    return taskRepository.getMyTasks(assignedTo, isApproved);
  };
  return {
    execute,
  };
};
