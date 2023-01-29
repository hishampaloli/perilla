import { DepenteniciesData } from "../../entities/interfaces";

export const getMyTasksPosts_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { taskRepository },
  } = dependencies;

  if (!taskRepository)
    throw new Error("The Task repository should be a dependencie");

  const execute = (assignedBy: string, isApproved: boolean) => {
    return taskRepository.getMyTasksPosts(assignedBy, isApproved);
  };
  return {
    execute,
  };
};
