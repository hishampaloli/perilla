import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getSingleTask_UseCase },
  } = dependencies;

  const getSingleTask = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const taskData = await getSingleTask_UseCase(dependencies).execute(
        req.params.taskId
      );

      if (!taskData) throw new BadRequestError("no such task found");

      res.json({ data: taskData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getSingleTask;
};
