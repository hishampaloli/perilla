import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllProjectTasks_UseCase, getSingleProject_UseCase },
  } = dependencies;

  const getAllProjectTasks = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const projectFound = await getSingleProject_UseCase(dependencies).execute(
        req.params.projectId
      );
      if (!projectFound) throw new BadRequestError("No such project found!");

      const tasksData = await getAllProjectTasks_UseCase(dependencies).execute(
        req.params.projectId,
        req.query.isApproved
      );

      if (!tasksData) throw new BadRequestError("no task found");

      res.json({ data: tasksData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getAllProjectTasks;
};
