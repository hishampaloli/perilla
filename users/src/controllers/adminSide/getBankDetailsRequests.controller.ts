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

      const allRequests = await getAllBankDetailsApprovalRequest_UseCase(
        dependencies
      ).execute(companyName);

      res.json({ data: allRequests });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getAllRequests;
};
