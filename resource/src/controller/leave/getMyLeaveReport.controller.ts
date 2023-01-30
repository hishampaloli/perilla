import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getMyLeaveReport_UseCase },
  } = dependencies;

  const getMyLeaveReport = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { isAccepted } = req.query;

      const leaveData = await getMyLeaveReport_UseCase(dependencies).execute(
        req.currentUser?.id.companyName,
        req.currentUser?.id.id,
        isAccepted
      );

      if (!leaveData) {
        throw new BadRequestError("No Leave application");
      }

      res.json({ data: leaveData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getMyLeaveReport;
};
