import React from "react";

const useVerifyFirbaseOtp = async (otp: string) => {
  const res = await window.confirmationResult
    .confirm(otp)
    .then((result: any) => {
      console.log(result);
      return result._tokenResponse.idToken;
    })
    .catch((err: any) => {
      return false;
    });

  return res;
};

export default useVerifyFirbaseOtp;
