import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import generateToken from "../../app/externalServices/jsonwebtoken";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editBankDetails_UseCase },
  } = dependencies;

  const sendbankDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const editedbankDetails = await editBankDetails_UseCase(
        dependencies
      ).execute(req.currentUser?.id.id, {
        approvalReq: true,
      });

      if (!editedbankDetails)
        throw new BadRequestError("Your bank details are already approved");

      res.json({ data: editedbankDetails });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return sendbankDetails;
};
