import React, { useState } from "react";
import OtpComponent from "../OtpComponent/OtpComponent";
import LoginFormComponent from "./LoginFormComponent";
import styles from "../../styles/buyProduct.module.scss";
import { useActions } from "../../hooks/useAction";
import { useTenantLoginValidator } from "../../hooks/useValidate";
import { toast } from "react-toastify";
import { AuthState, GetOtpState } from "../../models/tenants";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useRouter } from "next/router";
import { useFireBaseGetOtp } from "../../hooks/useFireBaseAuth";
import useVerifyFirbaseOtp from "../../hooks/useVerifyFirbaseOtp";
import FixedSpinner from "../layout/FixedSpinner";

const LoginComponent = () => {
  const { error, loading }: GetOtpState = useTypedSelector(
    (state) => state.getOtp
  );

  const userState: AuthState = useTypedSelector((state) => state.user);

  const router = useRouter();
  const [phone, setPhone] = useState<string>("");
  const [otpForm, setOtpForm] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [otpNumber, setOtpNumber] = useState<string>("");
  const { tenantLoginVerification, tenantLoginOtp } = useActions();

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const validate = useTenantLoginValidator({ companyName, password, phone });
    if (validate) {
      toast.error(validate);
    } else {
      const datas = await tenantLoginOtp("sdf", {
        phone,
        companyName,
        password,
      });
      if (!datas) {
        toast.error(`${error ? error : "Oops somthing went wrong"}`);
      } else {
        let fireOtp = await useFireBaseGetOtp(phone);
        console.log(fireOtp);
        if (fireOtp!) {
          toast.success("otp send");
          setOtpForm(true);
        }
      }
    }
  };

  const handleOtpLogin = async () => {
    const code = await useVerifyFirbaseOtp(otpNumber);

    if (code) {
      const verificationData = await tenantLoginVerification("", {
        companyName,
        password,
        phone,
        otpNumber: code,
      });
      if (userState?.error || `${!verificationData}`) {
        toast.error(`${userState?.error ? userState?.error : "Invalid OTP"}`);
      }

      if (`${verificationData}` === "success") {
        router.push(`/`);
      }
    } else {
      toast.error(`Invalid OTP`);
    }
  };

  return (
    <div className={styles.buyerFormDiv}>
      {otpForm ? (
        <OtpComponent
          setOtpNumber={setOtpNumber}
          handleSubmit={handleOtpLogin}
        />
      ) : (
        <LoginFormComponent
          handleLogin={handleLogin}
          setCompanyName={setCompanyName}
          setPassword={setPassword}
          setPhone={setPhone}
        />
      )}
      <div
        id="recaptcha-container"
        style={{ position: "fixed", top: "300px", zIndex: "100" }}
      ></div>
    </div>
  );
};

export default LoginComponent;
