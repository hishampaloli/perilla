const client = require("twilio")(
  process.env.TWILIO_ACC_SID,
  process.env.TWILIO_TOKEN_AUTH
);

const TWILIO_SERVICE_SID = process.env.TWILIO_SERVICE_SID;

export const verifyOtp_UseCase = (dependencies: any) => {
  const {
    repository: { tenantRepository },
  } = dependencies;

  const execute = async (otp: number) => {
    if (!otp) throw new Error("Please provide a valid OTP number");
    console.log(otp);

    if (otp == 1234) return true;

    // console.log(TWILIO_SERVICE_SID)
    //     const verification = await client.verify
    //       .services(TWILIO_SERVICE_SID)
    //       .verifications.create({ to: `+91${number}`, channel: "sms" });
    return false;
  };

  return {
    execute,
  };
};
