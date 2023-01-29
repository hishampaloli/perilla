import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editTask_UseCase },
  } = dependencies;

  const approveTask = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { status } = req.query;

      const approvedTask = await editTask_UseCase(dependencies).execute(
        req.params.taskId,
        req.currentUser?.id.id,
        { isCompleted: status, isApproved: status }
      );

      if (!approvedTask) throw new BadRequestError("no such task found");

      res.json({ data: approvedTask });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return approveTask;
};
