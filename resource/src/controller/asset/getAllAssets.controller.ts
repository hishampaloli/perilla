import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllAssets_UseCase },
  } = dependencies;

  const getAllAssets = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { pageNumber } = req.query;
      const companyName =
        req.currentTenant?.id.companyName || req.currentUser?.id.companyName;

      const allAssets = await getAllAssets_UseCase(dependencies).execute(
        companyName,
        pageNumber
      );

      if (!allAssets) {
        throw new BadRequestError("No such assets found");
      }

      res.json({ data: allAssets });
    } catch (error: any) {
      throw new BadRequestError(error);
    }
  };
  return getAllAssets;
};
