import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { verifyIdToken } from "../../app/externalServices/firebaseOtpVerification";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { viewMyApplication_UseCase },
  } = dependencies;

  const viewApplicationAdmin = async (req: Request, res: Response) => {
    try {
      const { applicationId, verifyToken } = req.body;

      const { email }: any = await verifyIdToken(verifyToken);
      if (!email) throw new BadRequestError("not authorized");

      const applicationData = await viewMyApplication_UseCase(
        dependencies
      ).execute(email, applicationId);

      if (!applicationData) throw new BadRequestError("No data found");
      res.json({ data: applicationData });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return viewApplicationAdmin;
};
