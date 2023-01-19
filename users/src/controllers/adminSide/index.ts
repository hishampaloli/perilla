import createEmployeeController from "./createEmployee.controller";
import getAllEmployeeController from "./getAllEmployee.controller";
import getEmployeeController from "./getEmployee.controller";
import editEmployeeController from "./editEmployee.controller";
import removeEmployeeController from "./removeEmployee.controller";
import changeEmployeePasswordController from "./changeEmployeePassword.controller";
import getEmployeeProfileDataController from "./getEmployeeProfileData.controller";
import getBankDetailsRequestsController from "./getBankDetailsRequests.controller";
import approveOrRejectBankDetails from "./approveOrRejectBankDetails";

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
    getBankDetailsRequestsController:
      getBankDetailsRequestsController(dependencies),
    approveOrRejectBankDetails: approveOrRejectBankDetails(dependencies),
  };
};
