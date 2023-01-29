import { DepenteniciesData } from "../../entities/interfaces";

export const editTask_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { taskRepository },
  } = dependencies;

  if (!taskRepository)
    throw new Error("The Task repository should be a dependencie");

  const execute = (taskId: string, assignedBy: string, data: object) => {
    return taskRepository.editTask(taskId, assignedBy, data);
  };
  return {
    execute,
  };
};
