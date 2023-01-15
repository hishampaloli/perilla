import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hr-management/common";
import { TenantData } from "../../libs/entities";

export = (dependencies: any): any => {
  const {
    useCases: { getTenants_UseCase },
  } = dependencies;

  const getTenants = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const tenants = await getTenants_UseCase(dependencies).execute();

      if (!tenants) {
        throw new BadRequestError("No data found");
      }

      res.json({ tenants });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getTenants;
};
