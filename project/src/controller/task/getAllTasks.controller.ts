import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllTasks_UseCase },
  } = dependencies;

  const getAllTasks = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const allTasks = await getAllTasks_UseCase(dependencies).execute(
        req.currentTenant?.id.companyName,
        req.query.isApproved
      );

      if (!allTasks) throw new BadRequestError("no task found");

      res.json({ data: allTasks });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getAllTasks;
};
