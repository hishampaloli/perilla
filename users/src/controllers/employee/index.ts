import createEmployeeController from "./createEmployee.controller";
import getAllEmployeeController from "./getAllEmployee.controller";
import getEmployeeController from "./getEmployee.controller";
import editEmployeeController from "./editEmployee.controller";
import removeEmployeeController from "./removeEmployee.controller";
import changeEmployeePasswordController from "./changeEmployeePassword.controller";

export = (dependencies: any) => {
  return {
    createEmployeeController: createEmployeeController(dependencies),
    getEmployeeController: getEmployeeController(dependencies),
    getAllEmployeeController: getAllEmployeeController(dependencies),
    editEmployeeController: editEmployeeController(dependencies),
    removeEmployeeController: removeEmployeeController(dependencies),
    changeEmployeePasswordController:
      changeEmployeePasswordController(dependencies),
  };
};
