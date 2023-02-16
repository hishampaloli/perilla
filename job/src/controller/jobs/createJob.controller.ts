import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createJob_UseCase },
  } = dependencies;

  const createJob = async (req: Request, res: Response) => {
    try {
      const {
        companyName,
        jobTitle,
        jobDesignation,
        lastDate,
        jobDescription,
        jobKeyRoles,
        jobType,
        salaryFrom,
        salaryTo,
        status,
        experience,
        vacancy,
        location,
        applicationQuestions,
      } = req.body;
      console.log(salaryTo);

      const createdJob = await createJob_UseCase(dependencies).execute({
        companyName: req.currentTenant?.id.companyName,
        jobTitle,
        jobDesignation,
        lastDate,
        jobDescription,
        jobKeyRoles,
        jobType,
        salaryFrom,
        salaryTo,
        status,
        experience,
        vacancy,
        location,
        applicationQuestions,
      });
      if (!createdJob) throw new BadRequestError("Please try again");
      res.json({ data: createdJob });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return createJob;
};
