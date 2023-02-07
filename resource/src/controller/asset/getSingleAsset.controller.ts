import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getSingleAsset_UseCase },
  } = dependencies;

  const getSingleAsset = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { assetId } = req.params;
      const companyName =
        req.currentTenant?.id.companyName || req.currentUser?.id.companyName;

      const assetsData = await getSingleAsset_UseCase(dependencies).execute(
        companyName,
        assetId
      );

      if (!assetsData) {
        throw new BadRequestError("No such asset found");
      }

      res.json({ data: assetsData });
    } catch (error: any) {
      throw new BadRequestError(error);
    }
  };
  return getSingleAsset;
};
