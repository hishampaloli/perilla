import express from "express";
import { body, validationResult } from "express-validator";
import {
  currentTenant,
  requireTenantAuth,
  currentUser,
  isHrOrAdmin,
  requireTenantOrUser,
  requireUserAuth,
} from "@hr-management/common";
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

import { employeeController } from "../../controllers";
import { downloadFileFromBucket } from "../externalServices/awsS3Bucket";

export = (dependencies: any) => {
  const router = express.Router();
  const {
    getMyProfileController,
    employeeLoginController,
    verifyEmployeeLoginController,
    getMyProfileDataController,
    editPersonalInfoController,
    editEmergancyContactController,
    getBankDetailsController,
    editBankDetailsController,
    sendBankDetailsController,
    getMyNotificationController,
    deleteNotificationController,
    employeeLogoutController,
    uploadProfileImageController,
  } = employeeController(dependencies);

  router.get(
    "/myProfile",
    currentUser,
    requireUserAuth,
    getMyProfileController
  );

  router.post("/logout", employeeLogoutController);

  router.get(
    "/myProfileData",
    currentUser,
    requireUserAuth,
    getMyProfileDataController
  );

  router.post("/login", employeeLoginController);
  router.post("/verifyOtp", verifyEmployeeLoginController);

  router.patch(
    "/addPersonalInfo",
    currentUser,
    requireUserAuth,
    editPersonalInfoController
  );

  router.patch(
    "/addEmergencyContact",
    currentUser,
    requireUserAuth,
    editEmergancyContactController
  );

  router.get(
    "/bankDetails",
    currentUser,
    requireUserAuth,
    getBankDetailsController
  );
  router.put(
    "/editBankDetails",
    currentUser,
    requireUserAuth,
    editBankDetailsController
  );

  router.patch(
    "/sendBankDetails",
    currentUser,
    requireUserAuth,
    sendBankDetailsController
  );

  router.get(
    "/notifications",
    currentUser,
    requireUserAuth,
    getMyNotificationController
  );

  router.delete(
    "/notifications/:id",
    currentUser,
    requireUserAuth,
    deleteNotificationController
  );

  router.post(
    "/uploadProfile",
    currentUser,
    requireUserAuth,
    upload.single("image"),
    uploadProfileImageController
  );

  router.get("/do/:id", async (req, res) => {
    const downLoad = await downloadFileFromBucket(req.params.id);
    console.log(downLoad);
    console.log("//777&&&&&&&&&&&&&&&&&&");

    res.send(downLoad)
    // fileStream.pipe(res);
  });
  return router;
};
