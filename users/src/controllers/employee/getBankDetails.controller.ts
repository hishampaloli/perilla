import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getBankDetails_UseCase },
  } = dependencies;

  const getBankDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const companyName = req.currentUser?.id.companyName;
      const employeeId = req.currentUser?.id.id;

      const bankDetails = await getBankDetails_UseCase(dependencies).execute(
        companyName,
        employeeId
      );

      res.json({ data: bankDetails });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getBankDetails;
};
