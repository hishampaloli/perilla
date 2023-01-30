import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { viewLeaveApplication_UseCase },
  } = dependencies;

  const viewLeaveApplication = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { leaveId } = req.params;

      const leaveData = await viewLeaveApplication_UseCase(
        dependencies
      ).execute(
        req.currentUser?.id.companyName || req.currentTenant?.id.companyName,
        leaveId,
        req.currentUser?.id.id,
        req.currentTenant?.id.id
      );

      if (!leaveData) {
        throw new BadRequestError("You can only see your application");
      }

      res.json({ data: leaveData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return viewLeaveApplication;
};
