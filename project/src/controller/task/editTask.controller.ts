import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editTask_UseCase },
  } = dependencies;

  const editTask = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { priority, taskName, taskDescription, deadline } = req.body;
      const taskData = await editTask_UseCase(dependencies).execute(
        req.params.taskId,
        req.currentUser?.id.id,
        { priority, taskName, taskDescription, deadline }
      );

      if (!taskData) throw new BadRequestError("no such task found");

      res.json({ data: taskData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return editTask;
};
