import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getProjectsUnderUser_usecase },
  } = dependencies;

  const getProjectsUnderUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let companyName =
        req.currentUser?.id.companyName || req.currentTenant?.id.companyName;

      const projectsData = await getProjectsUnderUser_usecase(
        dependencies
      ).execute(companyName, req.params.employeeId);

      if (!projectsData) {
        throw new BadRequestError("No projects found");
      }

      res.json({ data: projectsData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getProjectsUnderUser;
};
