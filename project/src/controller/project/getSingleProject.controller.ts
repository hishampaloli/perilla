import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getSingleProject_UseCase },
  } = dependencies;

  const getSingleProjects = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let companyName =
        req.currentUser?.id.companyName || req.currentTenant?.id.companyName;

      const projectData = await getSingleProject_UseCase(dependencies).execute(
        req.params.projectId
      );

      if (!projectData) {
        throw new BadRequestError("No such project found");
      }

      res.json({ data: projectData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getSingleProjects;
};
