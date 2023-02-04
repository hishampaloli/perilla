import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getMyProjects_usecase },
  } = dependencies;

  const getMyProjects = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { projectName, pageNumber } = req.query;
      console.log(projectName, pageNumber);
      console.log('sdsdsdsdsdsd')
      
      let companyName =
        req.currentUser?.id.companyName || req.currentTenant?.id.companyName;

      const { mongooseObj, page, pages } = await getMyProjects_usecase(
        dependencies
      ).execute(
        companyName,
        req.query.status,
        req.currentUser?.id.id,
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
  return getMyProjects;
};
