import createTaskController from "./createTask.controller";
import getAllProjectTasksController from "./getAllProjectTasks.controller";

export = (dependencies: any) => {
  return {
    createTaskController: createTaskController(dependencies),
    getAllProjectTasksController: getAllProjectTasksController(dependencies),
  };
};
