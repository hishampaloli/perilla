import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getLeaveApplications_UseCase },
  } = dependencies;

  const getLeaveApplications = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { isAccepted } = req.query;

      const leaveData = await getLeaveApplications_UseCase(
        dependencies
      ).execute(req.currentTenant?.id.companyName, isAccepted);

      if (!leaveData) {
        throw new BadRequestError("No requests found");
      }

      res.json({ data: leaveData });
    } catch (error: any) {
      throw new BadRequestError(error);
    }
  };
  return getLeaveApplications;
};
