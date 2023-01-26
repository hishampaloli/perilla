import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import generateToken from "../../app/externalServices/jsonwebtoken";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editBankDetails_UseCase },
  } = dependencies;

  const editebankDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { bankName, accountNumber, ifcsCode, panNumber } = req.body;

      const editedbankDetails = await editBankDetails_UseCase(
        dependencies
      ).execute(req.currentUser?.id.id, {
        bankName,
        accountNumber,
        ifcsCode,
        panNumber,
      });

      if (!editedbankDetails)
        throw new BadRequestError("Your bank details are already approved");

      res.json({ data: editedbankDetails });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return editebankDetails;
};
