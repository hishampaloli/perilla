import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import generateToken from "../../app/externalServices/jsonwebtoken";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editEmergencyContact_UseCase },
  } = dependencies;

  const editEmergencyContact = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { primary, secondary } = req.body;

      const editedContact = await editEmergencyContact_UseCase(
        dependencies
      ).execute(req.currentUser?.id.id, primary, secondary);

      if (!editedContact)
        throw new BadRequestError("Opps something wend wrong");

      res.json({ data: editedContact });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return editEmergencyContact;
};
