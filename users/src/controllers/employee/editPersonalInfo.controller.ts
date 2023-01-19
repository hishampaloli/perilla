import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import generateToken from "../../app/externalServices/jsonwebtoken";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editPersonalInfo_UseCase },
  } = dependencies;

  const editPersonalInfo = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const {
        nationality,
        religion,
        martialStatus,
        employementOfPartner,
        passportNumber,
        noOfChildren,
      } = req.body;

      const editedInfo = await editPersonalInfo_UseCase(dependencies).execute(
        req.currentUser?.id.id,
        nationality,
        religion,
        martialStatus,
        employementOfPartner,
        passportNumber,
        noOfChildren
      );

      if (!editedInfo) throw new BadRequestError("Opps something wend wrong");

      res.json({ data: editedInfo });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return editPersonalInfo;
};
