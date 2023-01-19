import createEmployeeController from "./createEmployee.controller";
import getAllEmployeeController from "./getAllEmployee.controller";
import getEmployeeController from "./getEmployee.controller";
import editEmployeeController from "./editEmployee.controller";
import removeEmployeeController from "./removeEmployee.controller";
import changeEmployeePasswordController from "./changeEmployeePassword.controller";
import getEmployeeProfileDataController from "./getEmployeeProfileData.controller";

export = (dependencies: any) => {
  return {
    createEmployeeController: createEmployeeController(dependencies),
    getAllEmployeeController: getAllEmployeeController(dependencies),
    getEmployeeController: getEmployeeController(dependencies),
    editEmployeeController: editEmployeeController(dependencies),
    removeEmployeeController: removeEmployeeController(dependencies),
    changeEmployeePasswordController:
      changeEmployeePasswordController(dependencies),
    getEmployeeProfileDataController:
      getEmployeeProfileDataController(dependencies),
  };
};
