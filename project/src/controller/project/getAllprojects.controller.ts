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
      let companyName =
        req.currentUser?.id.companyName || req.currentTenant?.id.companyName;

      const projectsData = await getAllProject_UseCase(dependencies).execute(
        companyName,
        req.query.status,
        req.currentUser ? req.currentUser.id.id : ""
      );

      if (!projectsData) {
        throw new BadRequestError("No projects found");
      }

      res.json({ data: projectsData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getAllProjects;
};
