const client = require("twilio")(
  process.env.TWILIO_ACC_SID,
  process.env.TWILIO_TOKEN_AUTH
);

const TWILIO_SERVICE_SID = process.env.TWILIO_SERVICE_SID;

import { DepenteniciesData } from "../../entities/interfaces";

export const getTwilioOtp_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { employeeRepository },
  } = dependencies;

  if (!employeeRepository)
    throw new Error("The employee repository should be dependencie");

  const execute = async (number: number) => {
    // console.log(TWILIO_SERVICE_SID, number)
    //   await client.verify.services(TWILIO_SERVICE_SID)
    //         .verifications
    //         .create({ to: `+91${number}`, channel: 'sms' })
    //         .then((verification: any) => console.log(verification))
    //         .catch((e: any) => {
    //             console.log(e);                
    //             return false
    //         });
          
    return "verification";
  };

  return {
    execute,
  };
};
