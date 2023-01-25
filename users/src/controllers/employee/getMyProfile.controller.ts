import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getEmployee_UseCase },
  } = dependencies;

  const getMyProfile = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const myProfile = await getEmployee_UseCase(dependencies).execute({
        company: req.currentUser?.id.companyName,
        phone: req.currentUser?.id.phone,
        email: req.currentUser?.id.email,
      });

      res.json({ data: myProfile[0] });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getMyProfile;
};
