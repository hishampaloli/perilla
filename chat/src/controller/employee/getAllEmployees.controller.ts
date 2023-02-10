import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllEmployee_UseCase },
  } = dependencies;

  const AllEmployees = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const companyName =
        req.currentTenant?.id.companyName || req.currentUser?.id.companyName;

      const getAllEmployees = await getAllEmployee_UseCase(
        dependencies
      ).execute(companyName);

      if (!getAllEmployees) {
        throw new BadRequestError("No employees found!");
      }

      res.json({ data: getAllEmployees });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return AllEmployees;
};
