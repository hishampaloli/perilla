import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getMyTasks_UseCase },
  } = dependencies;

  const getMyTask = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const taskData = await getMyTasks_UseCase(dependencies).execute(
        req.currentUser?.id.id,
        req.query.isApproved,
      );

      if (!taskData) throw new BadRequestError("no tasks found");

      res.json({ data: taskData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getMyTask;
};
