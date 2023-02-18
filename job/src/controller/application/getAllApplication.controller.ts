import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { verifyIdToken } from "../../app/externalServices/firebaseOtpVerification";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllApplications_UseCase },
  } = dependencies;

  const getAllApplication = async (req: Request, res: Response) => {
    try {
      const { status } = req.query;

      const allApplications = await getAllApplications_UseCase(
        dependencies
      ).execute(req.currentTenant?.id.companyName, status);
      if (!allApplications) throw new BadRequestError("No data found");
      res.json({ data: allApplications });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  
  return getAllApplication;
};
