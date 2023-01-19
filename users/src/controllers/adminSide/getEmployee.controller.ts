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
      const { phone } = req.query;
      const companyName =
        req.currentTenant?.id?.companyName || req.currentUser?.id?.companyName
      console.log(companyName);
      const userPresent = await getEmployee_UseCase(dependencies).execute({
        company: companyName,
        phone,
        email: "",
      });

      res.json({ userPresent });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getEmployee;
};
