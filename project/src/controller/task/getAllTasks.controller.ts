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
      const { taskName, pageNumber } = req.query;
      const { mongooseObj, page, pages } = await getAllTasks_UseCase(
        dependencies
      ).execute(
        req.currentTenant?.id.companyName,
        req.query.isApproved,
        taskName,
        pageNumber
      );

      if (!mongooseObj) throw new BadRequestError("no task found");

      res.json({ data: mongooseObj, page, pages });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getAllTasks;
};
