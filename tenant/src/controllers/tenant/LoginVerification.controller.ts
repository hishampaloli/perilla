import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hr-management/common";
import { TenantData } from "../../libs/entities";
import generateToken from "../../libs/utils/jsonwebtoken";
import { LoginResponse } from "../../libs/utils/mailService";

export = (dependencies: any): any => {
  const {
    useCases: { tenantLogin_UseCase, verifyOtp_UseCase, sendMail_UseCase },
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
        otpNumber,
        phone
      );

      if (!verifyOtp) throw new BadRequestError("incorrect otp");

      // TODO: UNCOMMENT BELOW CODE TO GET EMAILS
      // const email = await sendMail_UseCase(dependencies).execute({
      //   userEmail: istenant.email,
      //   subject: "New Login found",
      //   response: LoginResponse,
      // });

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
