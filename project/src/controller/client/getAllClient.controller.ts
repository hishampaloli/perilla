import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllClient_UseCase },
  } = dependencies;

  const getAllClients = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { clientId, clientName, pageNumber } = req.query;
      const companyName =
        req.currentTenant?.id.companyName || req.currentUser?.id.companyName;

      const ClientDatas = await getAllClient_UseCase(dependencies).execute(
        companyName,
        clientName,
        clientId,
        pageNumber
      );

      if (!ClientDatas) {
        throw new BadRequestError("No Data found");
      }

      res.json({
        data: ClientDatas.mongooseObj,
        page: ClientDatas.page,
        pages: ClientDatas.pages,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getAllClients;
};
