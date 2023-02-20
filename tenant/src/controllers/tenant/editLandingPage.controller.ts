import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hr-management/common";

export = (dependencies: any): any => {
  const {
    useCases: { editLandingPage_UseCase },
  } = dependencies;

  const getTenants = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { title, description } = req.body;
      const landingPageData = await editLandingPage_UseCase(dependencies).execute(
        req.currentTenant?.id.companyName,
        title,
        description
      );

      if (!landingPageData) {
        throw new BadRequestError("No data found");
      }

      res.json({ data: landingPageData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getTenants;
};
