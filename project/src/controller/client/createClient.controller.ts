import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createClient_UseCase },
  } = dependencies;

  const createClient = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const {
        clientCompany,
        clientName,
        email,
        phone,
        clientId,
        address,
        gender,
        image,
      } = req.body;

      const createdClient = await createClient_UseCase(dependencies).execute({
        companyName: req.currentTenant?.id?.companyName,
        clientCompany,
        clientName,
        email,
        phone,
        clientId,
        address,
        gender,
        image,
      });

      if (!createdClient) {
        throw new BadRequestError("Opps somthing went wrong!");
      }

      res.json({ data: createdClient });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return createClient;
};
