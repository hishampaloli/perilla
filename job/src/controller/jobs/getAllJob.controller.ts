import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllJobs_UseCase },
  } = dependencies;

  const getAllJobs = async (req: Request, res: Response) => {
    try {
      const { companyName, pageNumber, status } = req.query;
      const allJobs = await getAllJobs_UseCase(dependencies).execute(
        companyName,
        pageNumber,
        status
      );
      if (!allJobs) throw new BadRequestError("Please try again");
      res.json({ data: allJobs });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getAllJobs;
};
