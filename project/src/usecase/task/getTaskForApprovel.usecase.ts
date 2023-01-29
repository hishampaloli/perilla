import { DepenteniciesData } from "../../entities/interfaces";

export const getTaskForApproval_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { taskRepository },
  } = dependencies;

  if (!taskRepository)
    throw new Error("The Task repository should be a dependencie");

  const execute = (assignedBy: string) => {
    return taskRepository.getTaskForApproval(assignedBy);
  };
  return {
    execute,
  };
};
