import { Request, Response, NextFunction } from "express";

export = (dependencies: any): any => {
  const employeeLogout = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      req.session = null;
      res.status(200).json({ status: "signedOut" });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return employeeLogout;
};
