// createPaidTenant

import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hr-management/common";
const stripe = require("stripe")(
  "sk_test_51L7JjzSAUl4DYrh9Nwngsm9mXI6XXT7qarliWLKvfjxodbIBp3MvXLSQjk7kR6IYQMhBx4BfGCUx5lroBEgTn17A000Zq2ZvfR"
);

export = (dependencies: any): any => {
  const {
    useCases: { tenantLogin_UseCase, getOtp_UseCase },
  } = dependencies;

  const stripePayement = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "PERILLA",
              },
              unit_amount: 20000,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `https://perilla.dev/payment/{CHECKOUT_SESSION_ID}`,
        cancel_url: "https://perilla.dev/api/tenant/stripeVerification",
      });

      const url = session.url;

      res.json({ url });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return stripePayement;
};
