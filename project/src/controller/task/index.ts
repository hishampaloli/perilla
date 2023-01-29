import createTaskController from "./createTask.controller";

export = (dependencies: any) => {
  return {
    createTaskController: createTaskController(dependencies),
  };
};
