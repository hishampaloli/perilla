import express from "express";
import {
  currentTenant,
  requireTenantAuth,
  isHrOrAdmin,
  requireTenantOrUser,
  currentUser,
} from "@hr-management/common";

import { clientController } from "../../controller";

export = (dependencies: any) => {
  const router = express.Router();
  const {
    createClientController,
    getClientController,
    getAllClientsController,
    editClientController,
  } = clientController(dependencies);

  router.post(
    "/addClient",
    currentTenant,
    requireTenantAuth,
    createClientController
  );

  router.get(
    "/allClients",
    currentUser,
    currentTenant,
    requireTenantOrUser,
    isHrOrAdmin,
    getAllClientsController
  );

  router.get(
    "/:clientId",
    currentUser,
    currentTenant,
    requireTenantOrUser,
    isHrOrAdmin,
    getClientController
  );

  router.put(
    "/:clientId",
    currentTenant,
    requireTenantAuth,
    editClientController
  );

  return router;
};
