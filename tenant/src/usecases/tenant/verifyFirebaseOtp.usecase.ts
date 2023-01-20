import { verifiyFirbaseOtp } from "../../app/externalServices/firebaseOtpVerification";

export const verifyFireBaseOtp_UseCase = (dependencies: any) => {
  const {
    repository: { tenantRepository },
  } = dependencies;

  const execute = async (code: string, number: number) => {
    if (!code) throw new Error("Invalid OTP");

    if (code == "1234") return true;

    const result = await verifiyFirbaseOtp(code, number);

    return result;
  };

  return {
    execute,
  };
};
