import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hr-management/common";

export = (dependencies: any): any => {
  const {
    useCases: { getLandingPage_UseCase },
  } = dependencies;

  const getTenants = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const landingPage = await getLandingPage_UseCase(dependencies).execute(
        req.currentTenant?.id.companyName
      );

      if (!landingPage) {
        throw new BadRequestError("No data found");
      }

      res.json({ data: landingPage });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getTenants;
};
