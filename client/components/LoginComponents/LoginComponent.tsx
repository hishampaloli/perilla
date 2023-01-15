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
  const { error, loading, data }: GetOtpState = useTypedSelector(
    (state) => state.getOtp
  );

  console.log("error^^^^^^^^^^^^^^6");
  const buyProductState: AuthState = useTypedSelector(
    (state) => state.buyProduct
  );

  console.log(buyProductState);
  const router = useRouter();
  const [phone, setPhone] = useState<string>("");
  const [otpForm, setOtpForm] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [otpNumber, setOtpNumber] = useState<string>("");
  const { tenantLogin, tenantLoginVerification } = useActions();

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const validate = useTenantLoginValidator({ companyName, password, phone });
    if (validate) {
      toast.error(validate);
    } else {
      const datas = await tenantLogin("sdf", { phone, companyName, password });
      if (!datas) {
        toast.error(
          `${
            buyProductState?.error
              ? buyProductState?.error
              : "Oops somthing went wrong"
          }`
        );
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

    if (buyProductState?.error) {
      toast.error(`${buyProductState?.error}`);
    }

    console.log(verificationData);
    if (`${verificationData}` === 'success') {
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
