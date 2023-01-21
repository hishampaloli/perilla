import { sendTwilioOtp } from "../../libs/utils/twilioService";


export const getTwilioOtp_UseCase = (dependencies: any) => {
  const {
    repository: { tenantRepository },
  } = dependencies;

  const execute = async (number: number) => {
    let result = sendTwilioOtp(number);  
    return result;
  };

  return {
    execute,
  };
};
