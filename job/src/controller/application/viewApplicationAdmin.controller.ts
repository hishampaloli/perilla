import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { verifyIdToken } from "../../app/externalServices/firebaseOtpVerification";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { viewApplicationAdmin_UseCase },
  } = dependencies;

  const viewApplicationAdmin = async (req: Request, res: Response) => {
    try {
      const allApplications = await viewApplicationAdmin_UseCase(
        dependencies
      ).execute(req.currentTenant?.id.companyName, req.params.applicationId);
      if (!allApplications) throw new BadRequestError("No data found");
      res.json({ data: allApplications });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return viewApplicationAdmin;
};
