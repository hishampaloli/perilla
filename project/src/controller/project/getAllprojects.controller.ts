import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllProject_UseCase },
  } = dependencies;

  const getAllProjects = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { projectName, pageNumber } = req.query;
      let companyName =
        req.currentUser?.id.companyName || req.currentTenant?.id.companyName;

      const { mongooseObj, page, pages } = await getAllProject_UseCase(
        dependencies
      ).execute(
        companyName,
        req.query.status,
        req.currentUser ? req.currentUser.id.id : "",
        projectName,
        pageNumber
      );

      if (!mongooseObj) {
        throw new BadRequestError("No projects found");
      }

      res.json({ data: mongooseObj, page, pages });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getAllProjects;
};
