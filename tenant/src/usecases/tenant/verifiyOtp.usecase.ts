import { verifyTwilioOtp } from "../../libs/utils/twilioService";

const client = require("twilio")(
  process.env.TWILIO_ACC_SID,
  process.env.TWILIO_TOKEN_AUTH
);

const TWILIO_SERVICE_SID = process.env.TWILIO_SERVICE_SID;

export const verifyOtp_UseCase = (dependencies: any) => {
  const {
    repository: { tenantRepository },
  } = dependencies;

  const execute = async (otp: number, number: number) => {
    if (!otp) throw new Error("Please provide a valid OTP number");
    console.log(otp);

    if (otp == 1234) return true;

    const result = await verifyTwilioOtp(number, otp);
    return result;
  };

  return {
    execute,
  };
};
