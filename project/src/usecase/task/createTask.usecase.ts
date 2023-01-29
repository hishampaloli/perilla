import { Task, TaskData } from "../../entities/Task";
import { DepenteniciesData } from "../../entities/interfaces";

export const createTask_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { taskRepository },
  } = dependencies;

  if (!taskRepository)
    throw new Error("The Task repository should be a dependencie");

  const execute = (data: TaskData) => {
    let task = new Task(data);
    return taskRepository.createTask(task);
  };
  return {
    execute,
  };
};
