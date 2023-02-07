import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { deleteAssets_UseCase },
  } = dependencies;

  const deleteAsset = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { companyName, id } = req.currentUser?.id!;

      const deleteAssets = await deleteAssets_UseCase(dependencies).execute(
        companyName,
        req.params.assetId,
        id
      );

      if (!deleteAssets) {
        throw new BadRequestError("No such assets found");
      }

      res.json({ data: deleteAssets });
    } catch (error: any) {
      throw new BadRequestError(error);
    }
  };
  return deleteAsset;
};
