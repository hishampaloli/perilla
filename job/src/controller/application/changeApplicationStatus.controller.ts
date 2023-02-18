import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { verifyIdToken } from "../../app/externalServices/firebaseOtpVerification";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { changeApplicationStatus_UseCase },
  } = dependencies;

  const changeApplicationStatus = async (req: Request, res: Response) => {
    try {
      const { applicationId, status } = req.query;

      const applicationData = await changeApplicationStatus_UseCase(
        dependencies
      ).execute(req.currentTenant?.id.companyName, applicationId, status);

      if (!applicationData) throw new BadRequestError("no such application");
      res.json({ data: applicationData });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return changeApplicationStatus;
};
