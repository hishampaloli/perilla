const client = require("twilio")(
    process.env.TWILIO_ACC_SID,
    process.env.TWILIO_TOKEN_AUTH
  );
  
  const TWILIO_SERVICE_SID = process.env.TWILIO_SERVICE_SID;
  
  export const sendTwilioOtp = async (number: number): Promise<boolean> => {
    const check = await client.verify
      .services(TWILIO_SERVICE_SID)
      .verifications.create({ to: `+91${number}`, channel: "sms" })
      .then((verification: any) => {
        return true;
      })
      .catch((e: any) => {
        return false;
      });
  
    return check;
  };
  
  export const verifyTwilioOtp = async (number: number, otp: number) => {
    const check = await client.verify
      .services(TWILIO_SERVICE_SID)
      .verificationChecks.create({ to: `+91${number}`, code: otp })
      .catch((e: any) => {
        return false;
      });
  
    if (check.status === "approved") {
      return true;
    } else {
      return false;
    }
  };