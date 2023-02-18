import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { verifyIdToken } from "../../app/externalServices/firebaseOtpVerification";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createApplication_UseCase, addApplications_UseCase },
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

      const { email, image }: any = await verifyIdToken(verifyToken);
      if (!email) throw new BadRequestError("not authorized");

      const createdApplication: any = await createApplication_UseCase(
        dependencies
      ).execute({
        companyName,
        name,
        email,
        number,
        image,
        experience,
        ctc,
        coverLetter,
        interviewQsr,
        jobId,
      });
      if (!createdApplication) throw new BadRequestError("Please try again");

      await addApplications_UseCase(dependencies).execute(
        companyName,
        jobId,
        createdApplication.id
      );
      res.json({ data: createdApplication });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return createApplication;
};
