import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { ProjectAddedResponse } from "../../app/externalService/mailService";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: {
      addTeamToProject_UseCase,
      getSingleEmployees_UseCase,
      sendMail_UseCase,
    },
  } = dependencies;

  const addTeamToProject = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const employeeFound = await getSingleEmployees_UseCase(
        dependencies
      ).execute(req.currentUser?.id?.companyName, req.body.employeeId);

      if (!employeeFound) throw new BadRequestError("No such employee found!");

      const projectsData = await addTeamToProject_UseCase(dependencies).execute(
        req.params.projectId,
        req.body.employeeId,
        req.currentUser?.id.id
      );

      if (!projectsData) {
        throw new BadRequestError(
          "You are not the owner of this project or no such projects found"
        );
      }


      // TODO:  EMAIL
      // const Resemail = await sendMail_UseCase(dependencies).execute({
      //   userEmail: employeeFound.email,
      //   subject: "Project Update",
      //   response: ProjectAddedResponse,
      // });

      res.json({ data: projectsData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return addTeamToProject;
};
