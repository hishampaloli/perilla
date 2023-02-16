import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editJob_UseCase },
  } = dependencies;

  const getSingleJob = async (req: Request, res: Response) => {
    try {
      const {
        jobTitle,
        jobDesignation,
        lastDate,
        jobDescription,
        jobKeyRoles,
        jobType,
        salaryFrom,
        salaryTO,
        status,
        experience,
        vacancy,
        location,
        applicationQuestions,
      } = req.body;
      const jobData = await editJob_UseCase(dependencies).execute(
        req.currentTenant?.id.companyName,
        req.params.jobId,
        {
          jobTitle,
          jobDesignation,
          lastDate,
          jobDescription,
          jobKeyRoles,
          jobType,
          salaryFrom,
          salaryTO,
          status,
          experience,
          vacancy,
          location,
          applicationQuestions,
        }
      );
      if (!jobData) throw new BadRequestError("Please try again");
      res.json({ data: jobData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getSingleJob;
};
