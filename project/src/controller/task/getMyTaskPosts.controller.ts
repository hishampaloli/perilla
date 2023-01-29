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
      const taskData = await getMyTasksPosts_UseCase(dependencies).execute(
        req.currentUser?.id.id,
        req.query.isApproved,
      );

      if (!taskData) throw new BadRequestError("no tasks found");

      res.json({ data: taskData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getMyTaskPosts;
};
