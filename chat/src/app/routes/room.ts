import express from "express";
import {
  currentTenant,
  requireTenantAuth,
  isHrOrAdmin,
  requireTenantOrUser,
  currentUser,
  requireUserAuth,
} from "@hr-management/common";

import { roomController } from "../../controller";

export = (dependencies: any) => {
  const router = express.Router();
  const { getMyRoomsController, getSingleRoomController } =
    roomController(dependencies);

  router.get("/myRooms", currentUser, requireUserAuth, getMyRoomsController);

  router.get(
    "/room/:roomId",
    currentUser,
    requireUserAuth,
    getSingleRoomController
  );

  return router;
};
