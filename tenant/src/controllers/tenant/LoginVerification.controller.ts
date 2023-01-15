import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hr-management/common";
import { TenantData } from "../../libs/entities";
import generateToken from "../../libs/utils/jsonwebtoken";

export = (dependencies: any): any => {
  const {
    useCases: { tenantLogin_UseCase, verifyOtp_UseCase },
  } = dependencies;

  const tenantLoginVerification = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { password, phone, companyName, otpNumber } = req.body;
      const istenant = await tenantLogin_UseCase(dependencies).execute(
        phone,
        companyName,
        password
      );

      if (!istenant) {
        throw new BadRequestError("Invalid credentials");
      }
      const verifyOtp = await verifyOtp_UseCase(dependencies).execute(
        otpNumber
      );

      if (!verifyOtp) throw new BadRequestError("incorrect otp");

      let token = generateToken(istenant);

      req.session = {
        tenantJwt: token,
        userDetails: istenant,
      };

      res.json({ data: istenant });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return tenantLoginVerification;
};
