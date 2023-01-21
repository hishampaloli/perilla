import app from "../secrets/firebase_cofigs";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const auth = getAuth(app);

const useCaptcha = async () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "normal",
      callback: (response: string) => {},
    },
    auth
  );
};

export { useCaptcha };
