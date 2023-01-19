import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common";
import { natsWrapper } from "../../nats-wrapper";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getEmployee_UseCase },
  } = dependencies;

  const getEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const myProfile = await getEmployee_UseCase(dependencies).execute({
        company: req.currentUser?.id.companyName,
        phone: req.currentUser?.id.phone,
        email: req.currentUser?.id.email,
      });

      res.json({ data: myProfile });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getEmployee;
};
