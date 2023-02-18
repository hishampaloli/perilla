import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { verifyIdToken } from "../../app/externalServices/firebaseOtpVerification";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getMyApplications_UseCase },
  } = dependencies;

  const getMyApplication = async (req: Request, res: Response) => {
    try {
      const { companyName, verifyToken, status } = req.body;
      const { email }: any = await verifyIdToken(verifyToken);
      if (!email) throw new BadRequestError("not authorized");

      const allApplications = await getMyApplications_UseCase(
        dependencies
      ).execute(companyName, email, status);

      if (!allApplications) throw new BadRequestError("No data found");
      res.json({ data: allApplications });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return getMyApplication;
};
