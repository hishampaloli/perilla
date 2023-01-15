const client = require("twilio")(
  process.env.TWILIO_ACC_SID,
  process.env.TWILIO_TOKEN_AUTH
);

const TWILIO_SERVICE_SID = process.env.TWILIO_SERVICE_SID;

export const getOtp_UseCase = (dependencies: any) => {
  const {
    repository: { tenantRepository },
  } = dependencies;

  const execute = async (number: number) => {
    if (!number && typeof number !== "number")
      throw new Error("Please provide an valid mobile number");

    const tenantData = await tenantRepository.getTenantData(number);

    if (tenantData) throw new Error("Number already exists");

    const verification = await client.verify
      .services(TWILIO_SERVICE_SID)
      .verifications.create({ to: `+91${number}`, channel: "sms" });
    return verification;
  };

  return {
    execute,
  };
};
