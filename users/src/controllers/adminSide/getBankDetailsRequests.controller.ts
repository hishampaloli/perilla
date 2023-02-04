import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllBankDetailsApprovalRequest_UseCase },
  } = dependencies;

  const getAllRequests = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const companyName =
        req.currentTenant?.id?.companyName || req.currentUser?.id?.companyName;

      const { mongooseObj, page, pages } =
        await getAllBankDetailsApprovalRequest_UseCase(dependencies).execute(
          companyName,
          req.query.pageNumber
        );

      res.json({ data: mongooseObj, page, pages });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getAllRequests;
};
