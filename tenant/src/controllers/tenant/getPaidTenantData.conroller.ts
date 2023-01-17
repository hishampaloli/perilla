import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hr-management/common";
import { TenantData } from "../../libs/entities";

export = (dependencies: any): any => {
  const {
    useCases: { getPayedTenant_UseCase },
  } = dependencies;

  const getPaidTenants = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { companyName } = req.query;

      console.log(companyName);
      const tenants = await getPayedTenant_UseCase(dependencies).execute(
        companyName
      );

      if (!tenants) {
        throw new BadRequestError("No such tenant found");
      }

      res.json({ data: tenants });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getPaidTenants;
};
