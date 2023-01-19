import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editBankDetails_UseCase },
  } = dependencies;

  const ApproveOrRejectBankDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { employeeId } = req.params;
      const { status } = req.query;

      const companyName =
        req.currentTenant?.id?.companyName || req.currentUser?.id?.companyName;

      const bankData = await editBankDetails_UseCase(dependencies).execute(
        employeeId,
        {
          isApproved: status === "approved" ? true : false,
          approvalReq: status === "approved" ? true : false,
        }
      );

      res.json({ data: bankData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return ApproveOrRejectBankDetails;
};
