import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getMyProfileData_UseCase },
  } = dependencies;

  const getMyProfileData = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const companyName = req.currentUser?.id.companyName;
      const employeeId = req.currentUser?.id.id;

      const myProfile = await getMyProfileData_UseCase(dependencies).execute(
        companyName,
        employeeId
      );

      res.json({ data: myProfile });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getMyProfileData;
};
