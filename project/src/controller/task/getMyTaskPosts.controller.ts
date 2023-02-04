import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getMyTasksPosts_UseCase },
  } = dependencies;

  const getMyTaskPosts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { taskName, pageNumber } = req.query;
      console.log(taskName + "///");
      const { mongooseObj, page, pages } = await getMyTasksPosts_UseCase(
        dependencies
      ).execute(
        req.currentUser?.id.id,
        req.query.isApproved,
        taskName,
        pageNumber
      );

      if (!mongooseObj) throw new BadRequestError("no tasks found");

      res.json({ data: mongooseObj, page, pages });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getMyTaskPosts;
};
