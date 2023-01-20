import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editClient_UseCase },
  } = dependencies;

  const editClient = async (
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

      const createdClient = await editClient_UseCase(dependencies).execute(
        req.currentTenant?.id?.companyName,
        req.params.clientId,
        {
          clientCompany,
          clientName,
          email,
          phone,
          clientId,
          address,
          gender,
          image,
        }
      );

      if (!createdClient) {
        throw new BadRequestError("No such clients found!");
      }

      res.json({ data: createdClient });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return editClient;
};
