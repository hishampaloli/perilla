import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { verifyIdToken } from "../../app/externalServices/firebaseOtpVerification";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createApplication_UseCase },
  } = dependencies;

  const createApplication = async (req: Request, res: Response) => {
    try {
      const {
        companyName,
        name,
        verifyToken,
        number,
        experience,
        ctc,
        coverLetter,
        interviewQsr,
        jobId,
      } = req.body;

      const email = await verifyIdToken(verifyToken);
      if (!email) throw new BadRequestError("not authorized");

      const createdApplication = await createApplication_UseCase(
        dependencies
      ).execute({
        companyName,
        name,
        email,
        number,
        experience,
        ctc,
        coverLetter,
        interviewQsr,
        jobId,
      });
      if (!createdApplication) throw new BadRequestError("Please try again");
      res.json({ data: createdApplication });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return createApplication;
};
