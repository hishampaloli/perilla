import createTaskController from "./createTask.controller";
import getAllProjectTasksController from "./getAllProjectTasks.controller";
import reqTaskApprovelController from "./reqTaskApprovel.controller";
import getSingleTaskController from "./getSingleTask.controller";
import editTaskController from "./editTask.controller";
import getTasksForApprovalController from "./getTasksForApproval.controller";
import approveTaskController from "./approveTask.controller";

export = (dependencies: any) => {
  return {
    createTaskController: createTaskController(dependencies),
    getAllProjectTasksController: getAllProjectTasksController(dependencies),
    reqTaskApprovelController: reqTaskApprovelController(dependencies),
    getSingleTaskController: getSingleTaskController(dependencies),
    editTaskController: editTaskController(dependencies),
    getTasksForApprovalController: getTasksForApprovalController(dependencies),
    approveTaskController: approveTaskController(dependencies),
  };
};
