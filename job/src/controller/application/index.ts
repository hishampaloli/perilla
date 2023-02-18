import createApplicationController from "./createApplication.controller";
import getAllApplicationController from "./getAllApplication.controller";
import getMyApplicationController from "./getMyApplication.controller";
import viewApplicationAdminController from "./viewApplicationAdmin.controller";
import viewMyApplicationController from "./viewMyApplication.controller";
import changeApplicationStatusController from "./changeApplicationStatus.controller";

export = (dependencies: any) => {
  return {
    createApplicationController: createApplicationController(dependencies),
    getAllApplicationController: getAllApplicationController(dependencies),
    getMyApplicationController: getMyApplicationController(dependencies),
    viewApplicationAdminController:
      viewApplicationAdminController(dependencies),
    viewMyApplicationController: viewMyApplicationController(dependencies),
    changeApplicationStatusController:
      changeApplicationStatusController(dependencies),
  };
};
