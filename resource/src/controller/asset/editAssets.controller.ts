import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editAssets_UseCase },
  } = dependencies;

  const editAsset = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { companyName, id } = req.currentUser?.id!;
      const { price, assetName } = req.body;
      const editedAssets = await editAssets_UseCase(dependencies).execute(
        companyName,
        req.params.assetId,
        id,
        { price, assetName }
      );

      if (!editedAssets) {
        throw new BadRequestError("No such assets found");
      }

      res.json({ data: editedAssets });
    } catch (error: any) {
      throw new BadRequestError(error);
    }
  };
  return editAsset;
};
