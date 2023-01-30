import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { applyLeave_UseCase },
  } = dependencies;

  const applyLeave = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { reason, leaveDuration, startingDate } = req.body;
      
      const appliedLeave = await applyLeave_UseCase(dependencies).execute({
        employeeId: req.currentUser?.id.id,
        companyName: req.currentUser?.id.companyName,
        reason,
        leaveDuration,
        startingDate,
      });

      if (!appliedLeave) {
        throw new BadRequestError("Some thing went wrong");
      }

      res.json({ data: appliedLeave });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return applyLeave;
};
