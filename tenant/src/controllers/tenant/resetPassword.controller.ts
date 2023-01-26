import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hr-management/common";

export = (dependencies: any): any => {
  const {
    useCases: { resetPassword_UseCase },
  } = dependencies;

  const resetPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { password, oldPassword } = req.body;
      const istenant = await resetPassword_UseCase(dependencies).execute(
        req.currentTenant?.id.phone,
        req.currentTenant?.id.companyName,
        oldPassword,
        password
      );

      if (!istenant) {
        throw new BadRequestError("Invalid old password");
      }

      res.json({ changed: true });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return resetPassword;
};
