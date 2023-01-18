import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hr-management/common";
import { TenantData } from "../../libs/entities";
import generateToken from "../../libs/utils/jsonwebtoken";
import { SignUpResponse } from "../../libs/utils/mailService";

export = (dependencies: any): any => {
  const {
    useCases: {
      createTenant_UseCase,
      verifyOtp_UseCase,
      getTenant_UseCase,
      sendMail_UseCase,
    },
  } = dependencies;

  const createTenant = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const {
        companyName,
        address,
        adminName,
        city,
        country,
        email,
        password,
        phone,
        postalCode,
      }: TenantData = req.body;
      const { otpNumber } = req.body;

      const tenantPresent = await getTenant_UseCase(dependencies).execute(
        phone,
        companyName
      );

      if (tenantPresent)
        throw new BadRequestError("Number or Company name already exists");

      const verifyOtp = await verifyOtp_UseCase(dependencies).execute(
        otpNumber
      );

      console.log(verifyOtp);
      if (!verifyOtp) throw new BadRequestError("incorrect otp");

      const addedTenant = await createTenant_UseCase(dependencies).execute(
        req.body
      );

      if (!addedTenant) {
        throw new BadRequestError("Something went wrong");
      }

      // TODO: UNCOMMENT BELOW CODE TO GET EMAILS

      // const Resemail = await sendMail_UseCase(dependencies).execute({
      //   userEmail: email,
      //   subject: "Registered Successfully",
      //   response: SignUpResponse({
      //     address,
      //     adminName,
      //     companyName,
      //     email,
      //     phone,
      //   }),
      // });

      let token = generateToken(addedTenant);

      req.session = {
        tenantJwt: token,
        userDetails: addedTenant,
      };

      res.json({ data: addedTenant });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return createTenant;
};
