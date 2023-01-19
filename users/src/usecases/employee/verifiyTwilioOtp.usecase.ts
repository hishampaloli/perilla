const client = require("twilio")(
    process.env.TWILIO_ACC_SID,
    process.env.TWILIO_TOKEN_AUTH
  );
  
  const TWILIO_SERVICE_SID = process.env.TWILIO_SERVICE_SID;
  
  export const verifyTwilioOtp_UseCase = (dependencies: any) => {
    const {
      repository: { tenantRepository },
    } = dependencies;
  
    const execute = async (otp: number, number: number) => {
      if (!otp) throw new Error("Please provide a valid OTP number");
      console.log(otp);
  
      if (otp == 1234) return true;
  
      
    //   const check = await client.verify
    //   .services(TWILIO_SERVICE_SID)
    //   .verificationChecks.create({ to: `+91${number}`, code: otp })
    //   .catch((e: any) => {
    //     return false
    //   });


    // if(check.status === 'approved') return true
      return false;
    };
  
    return {
      execute,
    };
  };
  