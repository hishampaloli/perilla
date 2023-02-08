import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getMyAssetPosts_UseCase },
  } = dependencies;

  const getAllAssets = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { companyName, id } = req.currentUser?.id!;

      const allAssets = await getMyAssetPosts_UseCase(dependencies).execute(
        companyName,
        id
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
