import { DepenteniciesData } from "../../entities/interfaces";

export const getMyTasksPosts_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { taskRepository },
  } = dependencies;

  if (!taskRepository)
    throw new Error("The Task repository should be a dependencie");

  const execute = (
    assignedBy: string,
    isApproved: boolean,
    taskName: string,
    pageNumber: number
  ) => {
    console.log(taskName + 88888888888);
    
    return taskRepository.getMyTasksPosts(
      assignedBy,
      isApproved,
      taskName,
      pageNumber
    );
  };
  return {
    execute,
  };
};
