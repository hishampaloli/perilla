import { DepenteniciesData } from "../../entities/interfaces";

export const getAllTasks_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { taskRepository },
  } = dependencies;

  if (!taskRepository)
    throw new Error("The Task repository should be a dependencie");

  const execute = (companyName: string, isApproved: boolean) => {
    return taskRepository.getAllTasks(companyName, isApproved);
  };
  return {
    execute,
  };
};
