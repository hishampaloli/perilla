import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getTaskForApproval_UseCase },
  } = dependencies;

  const getTasksForApproval = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const tasksData = await getTaskForApproval_UseCase(dependencies).execute(
        req.currentUser?.id.id
      );
      

      if (!tasksData) throw new BadRequestError("no such task found");

      res.json({ data: tasksData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getTasksForApproval;
};
