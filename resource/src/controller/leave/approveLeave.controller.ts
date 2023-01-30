import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { approveLeave_UseCase },
  } = dependencies;

  const getLeaveApplications = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { isAccepted } = req.query;

      const leaveData = await approveLeave_UseCase(dependencies).execute(
        req.currentTenant?.id.companyName,
        req.params.leaveId,
        isAccepted
      );

      if (!leaveData) {
        throw new BadRequestError("No such leave application found");
      }

      res.json({ data: leaveData });
    } catch (error: any) {
      throw new BadRequestError(error);
    }
  };
  return getLeaveApplications;
};
