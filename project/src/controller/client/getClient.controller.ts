import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getClient_UseCase },
  } = dependencies;

  const getClient = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { clientId } = req.params;
      const companyName =
        req.currentTenant?.id.companyName || req.currentUser?.id.companyName;

      const ClientData = await getClient_UseCase(dependencies).execute(
        companyName,
        clientId
      );

      if (!ClientData) {
        throw new BadRequestError("No such clients found");
      }

      res.json({ data: ClientData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getClient;
};
