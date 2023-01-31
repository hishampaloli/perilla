import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editProject_UseCase },
  } = dependencies;

  const editProject = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { projectName, priority, projectDescription, rate, startDate } =
        req.body;
      let userId = req.currentUser?.id.id;

      const projectData = await editProject_UseCase(dependencies).execute(
        req.params.projectId,
        userId,
        { projectName, priority, projectDescription, rate, startDate }
      );

      if (!projectData) {
        throw new BadRequestError(
          "You are not the owner of this project or no such projects found"
        );
      }

      res.json({ data: projectData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return editProject;
};
