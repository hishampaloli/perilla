import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { EmployeeRemovedFromProjectPublisher } from "../../events/publishers/employee-removed-from-project-event";
import { natsWrapper } from "../../nats-wrapper";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { removeTeamFromProject_UseCase },
  } = dependencies;

  const removeTeamFromProject = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const projectsData = await removeTeamFromProject_UseCase(
        dependencies
      ).execute(
        req.params.projectId,
        req.body.employeeId,
        req.currentUser?.id.id
      );

      if (!projectsData) {
        throw new BadRequestError(
          "You are not the owner of this project or no such projects found"
        );
      }

      await new EmployeeRemovedFromProjectPublisher(natsWrapper.client).publish(
        {
          companyName: req.currentUser?.id?.companyName || "",
          employeeId: req.body.employeeId,
          message: `You were removed from the project ${projectsData.projectName}`,
        }
      );

      
      res.json({ data: projectsData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return removeTeamFromProject;
};
