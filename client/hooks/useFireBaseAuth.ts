import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { useCaptcha } from "./useCaptcha";
import app from "../secrets/firebase_cofigs";

const auth = getAuth(app);
const useFireBaseGetOtp = async (phone: string) => {
  useCaptcha();
  const appVerifier = window.recaptchaVerifier;
  const result = await signInWithPhoneNumber(auth, `+91${phone}`, appVerifier)
    .then((confirmationResult: any) => {
      window.confirmationResult = confirmationResult;
      console.log(confirmationResult);
      return true;
    })
    .catch((error) => {
        console.log(error);        
      return false;
    });

  return result;
};

export { useFireBaseGetOtp };
