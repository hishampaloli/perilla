import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editEmployees_UseCase },
  } = dependencies;

  const removeEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const companyName = req.currentTenant?.id?.companyName;

      const removedEmployee = await editEmployees_UseCase(dependencies).execute(
        companyName,
        req.params.employeeId,
        { isBlocked: true }
      );
      if (!removedEmployee) throw new BadRequestError("No such user found");
      res.json({ data: removedEmployee });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return removeEmployee;
};
