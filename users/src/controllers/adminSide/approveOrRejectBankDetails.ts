import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editBankDetails_UseCase, createNotification_UseCase },
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

      console.log(bankData);
      

      const notification =
        status === "approved"
          ? "Your bank details were accepted"
          : "Your bank details were rejected. Please re-fill than soon.";


      const messageRes = await createNotification_UseCase(dependencies).execute(
        { companyName, message: notification, employee: employeeId }
      );

      console.log(messageRes);

      res.json({ data: bankData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return ApproveOrRejectBankDetails;
};
