import createClientController from "./createClient.controller";
import getClientController from "./getClient.controller";
import getAllClientsController from "./getAllClient.controller";
import editClientController from "./editClient.controller";

export = (dependencies: any) => {
  return {
    createClientController: createClientController(dependencies),
    getClientController: getClientController(dependencies),
    getAllClientsController: getAllClientsController(dependencies),
    editClientController: editClientController(dependencies),
  };
};
