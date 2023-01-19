import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getMyProfileData_UseCase },
  } = dependencies;

  const getEmployeeProfileData = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { employeeId } = req.params;

      const companyName =
        req.currentTenant?.id?.companyName || req.currentUser?.id?.companyName;

      const userData = await getMyProfileData_UseCase(dependencies).execute(
        companyName,
        employeeId
      );

      res.json({ data:  userData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getEmployeeProfileData;
};
