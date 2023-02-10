import getAllEmployeesController from "./getAllEmployees.controller";

export = (dependencies: any) => {
  return {
    getAllEmployeesController: getAllEmployeesController(dependencies),
  };
};
