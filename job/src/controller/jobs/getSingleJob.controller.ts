import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getSingleJob_UseCase },
  } = dependencies;

  const getSingleJob = async (req: Request, res: Response) => {
    try {
      const jobData = await getSingleJob_UseCase(dependencies).execute(
        req.params.jobId
      );
      if (!jobData) throw new BadRequestError("Please try again");
      res.json({ data: jobData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getSingleJob;
};
