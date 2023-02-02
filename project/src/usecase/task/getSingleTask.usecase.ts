import { DepenteniciesData } from "../../entities/interfaces";

export const getSingleTask_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { taskRepository },
  } = dependencies;

  if (!taskRepository)
    throw new Error("The Task repository should be a dependencie");

  const execute = (companyName: string, taskId: string) => {
    return taskRepository.getSingleTask(companyName, taskId);
  };
  return {
    execute,
  };
};
