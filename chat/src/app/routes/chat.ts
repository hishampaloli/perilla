import express from "express";
import {
  currentTenant,
  requireTenantAuth,
  isHrOrAdmin,
  requireTenantOrUser,
  currentUser,
  requireUserAuth,
} from "@hr-management/common";

import { chatController } from "../../controller";

export = (dependencies: any) => {
  const router = express.Router();
  const { getAllChatsUnderRoomController } = chatController(dependencies);

  router.get(
    "/allChats",
    currentUser,
    requireUserAuth,
    getAllChatsUnderRoomController
  );

  return router;
};
