import { sendTwilioOtp } from "../../libs/utils/twilioService";


export const getOtp_UseCase = (dependencies: any) => {
  const {
    repository: { tenantRepository },
  } = dependencies;

  const execute = async (number: number) => {
    let result = sendTwilioOtp(number);
    console.log(786);
    
    return result;
  };

  return {
    execute,
  };
};
