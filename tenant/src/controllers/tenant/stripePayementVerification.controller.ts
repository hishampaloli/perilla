// createPaidTenant

import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hr-management/common";
import generateToken from "../../libs/utils/jsonwebtoken";
import { PurchaseResponse } from "../../libs/utils/mailService";
const stripe = require("stripe")(
  "sk_test_51L7JjzSAUl4DYrh9Nwngsm9mXI6XXT7qarliWLKvfjxodbIBp3MvXLSQjk7kR6IYQMhBx4BfGCUx5lroBEgTn17A000Zq2ZvfR"
);

export = (dependencies: any): any => {
  const {
    useCases: {
      verifyStripe_UseCase,
      sendMail_UseCase,
      createLandingPage_UseCase,
    },
  } = dependencies;

  const stripePayement = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { session_id } = req.query;

      const { companyName } = req.currentTenant?.id!;
      const session = await verifyStripe_UseCase(dependencies).execute(
        session_id,
        companyName
      );

      if (!session) throw new BadRequestError("Already paid");

      // TODO: UNCOMMENT BELOW CODE TO GET EMAILS
      // const email = await sendMail_UseCase(dependencies).execute({
      //   userEmail: req.currentTenant?.id.email,
      //   subject: "Product purchased successfully",
      //   response: PurchaseResponse,
      // });

      await createLandingPage_UseCase(dependencies).execute({
        companyName,
        title: `Welcome to ${companyName}`,
      });

      let token = generateToken(session);

      req.session = {
        tenantJwt: token,
        userDetails: session,
      };
      res.json({ data: session });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return stripePayement;
};
