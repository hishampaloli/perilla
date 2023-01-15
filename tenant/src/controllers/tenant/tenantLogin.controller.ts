import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hr-management/common";
import { TenantData } from "../../libs/entities";
import generateToken from "../../libs/utils/jsonwebtoken";

export = (dependencies: any): any => {
  const {
    useCases: { tenantLogin_UseCase, getOtp_UseCase },
  } = dependencies;

  const tenantLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { password, phone, companyName } = req.body;
      const istenant = await tenantLogin_UseCase(dependencies).execute(
        phone,
        companyName,
        password
      );

      if (!istenant) {
        throw new BadRequestError("Invalid credentials");
      }
      const recivedOtp = await getOtp_UseCase(dependencies).execute(phone);

      if (!recivedOtp) {
        throw new BadRequestError("Otp request failed");
      }

      res.json({ otpSend: true });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return tenantLogin;
};
