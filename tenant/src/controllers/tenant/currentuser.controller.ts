import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hr-management/common";
import { TenantData } from "../../libs/entities";

export = (dependencies: any): any => {
  const currentuser = async (req: Request, res: Response) => {
    try {
      res.json({ currentTenant: req.currentTenant });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return currentuser;
};
