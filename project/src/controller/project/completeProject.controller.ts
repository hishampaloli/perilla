import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editProject_UseCase },
  } = dependencies;

  const completeProject = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { status } = req.query;
      let userId = req.currentUser?.id.id;

      const projectData = await editProject_UseCase(dependencies).execute(
        req.params.projectId,
        userId,
        { status }
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
  return completeProject;
};
