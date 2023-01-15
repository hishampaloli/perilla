import { Request, Response, NextFunction } from "express";

export = (dependencies: any): any => {
  const {
    useCases: { tenantLogin_UseCase },
  } = dependencies;

  const tenantLogout = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      req.session = null;
      res.status(200).send({ status: "signedOut" });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return tenantLogout;
};
