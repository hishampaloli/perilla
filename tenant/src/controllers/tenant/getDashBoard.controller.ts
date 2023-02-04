import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hr-management/common";
import { TenantData } from "../../libs/entities";

export = (dependencies: any): any => {
  const {
    useCases: { getDashboard_UseCase },
  } = dependencies;

  const getTenants = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const tenantDash = await getDashboard_UseCase(dependencies).execute(
        req.currentTenant?.id.companyName
      );

      if (!tenantDash) {
        throw new BadRequestError("No data found");
      }

      res.json({ data: tenantDash });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getTenants;
};
