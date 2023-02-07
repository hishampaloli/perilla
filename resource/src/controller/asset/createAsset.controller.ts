import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createAsset_UseCase },
  } = dependencies;

  const createAsset = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { assetName, price } = req.body;

      const createdAsset = await createAsset_UseCase(dependencies).execute({
        assetName,
        price,
        companyName: req.currentUser?.id.companyName,
        createdBy: req.currentUser?.id.id,
        createdAt: new Date(),
      });

      if (!createdAsset) {
        throw new BadRequestError("Oops something went wrong please try again");
      }

      res.json({ data: createdAsset });
    } catch (error: any) {
      throw new BadRequestError(error);
    }
  };
  return createAsset;
};
