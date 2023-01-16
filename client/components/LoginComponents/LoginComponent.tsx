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

const LoginComponent = () => {
  const { error, loading }: GetOtpState = useTypedSelector(
    (state) => state.getOtp
  );

  const userState: AuthState = useTypedSelector((state) => state.user);

  console.log(userState?.error);
  console.log(">?>?>?>?>?>?>");
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
        toast.success("otp send");
        setOtpForm(true);
      }
    }
  };
  const handleOtpLogin = async () => {
    const verificationData = await tenantLoginVerification("", {
      companyName,
      password,
      phone,
      otpNumber,
    });

    if (userState?.error || `${!verificationData}`) {
      toast.error(`${userState?.error ? userState?.error : "Invalid OTP"}`);
    }

    if (`${verificationData}` === "success") {
      router.push(`/`);
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
    </div>
  );
};

export default LoginComponent;
