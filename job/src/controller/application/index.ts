import createApplicationController from "./createApplication.controller";
export = (dependencies: any) => {
  return {
    createApplicationController: createApplicationController(dependencies),
  };
};
