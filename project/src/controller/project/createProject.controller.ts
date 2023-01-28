import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createProject_UseCase, getClient_UseCase },
  } = dependencies;

  const createProject = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const {
        companyName,
        projectName,
        client,
        startDate,
        priority,
        projectDescription,
        rate,
      } = req.body;

      const ClientData = await getClient_UseCase(dependencies).execute(
        companyName,
        client
      );

      if (!ClientData) {
        throw new BadRequestError("No such clients found");
      }

      const createdProject = await createProject_UseCase(dependencies).execute({
        companyName,
        projectName,
        client,
        startDate,
        priority,
        projectDescription,
        rate,
        createdBy: req.currentUser?.id.id,
      });

      if (!createdProject) {
        throw new BadRequestError("Something went wrong!");
      }

      res.json({ data: createProject });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return createProject;
};
