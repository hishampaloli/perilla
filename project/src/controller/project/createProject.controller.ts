import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { ProjectCreatedPublisher } from "../../events/publishers/project-created-event";
import { natsWrapper } from "../../nats-wrapper";

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
        projectName,
        client,
        startDate,
        priority,
        projectDescription,
        rate,
      } = req.body;
      let companyName =
        req.currentUser?.id.companyName || req.currentTenant?.id.companyName;

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

      await new ProjectCreatedPublisher(natsWrapper.client).publish({
        companyName: req.currentUser?.id?.companyName || "",
      });
      res.json({ data: createdProject });
    } catch (error: any) {
      throw new BadRequestError(error);
    }
  };
  return createProject;
};
