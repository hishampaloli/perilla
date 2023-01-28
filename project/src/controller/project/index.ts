import createProjectController from "./createProject.controller";

export = (dependencies: any) => {
  return {
    createProjectController: createProjectController(dependencies),
  };
};
