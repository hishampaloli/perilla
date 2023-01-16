import React, { useState } from "react";
import VerticalInputDiv from "../FormComponents/VerticalInputDiv";
import styles from "../../styles/buyProduct.module.scss";
import BuyFormComponent from "./RegisterFormComponent";
import OtpComponent from "../OtpComponent/OtpComponent";
import { useActions } from "../../hooks/useAction";
import { useTenantRegisterValidator } from "../../hooks/useValidate";
import { toast } from "react-toastify";
import { AuthState, GetOtpState } from "../../models/tenants";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useRouter } from "next/router";

const BuyProductComponent = () => {
  const router = useRouter();
  const [otp, setOtp] = useState<boolean>(false);
  const [otpNumber, setOtpNumber] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [adminName, setAdminName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");

  const { getRegisterOtp, tenantRegister } = useActions();
  const { error, loading }: GetOtpState = useTypedSelector(
    (state) => state.getOtp
  );

  const userState: AuthState = useTypedSelector((state) => state.user);

  console.log(userState?.data);
  const validate = useTenantRegisterValidator({
    companyName,
    adminName,
    phone,
    email,
    country,
    city,
    address,
    password,
    postalCode,
  });

  const handleOtp = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (validate) {
      toast.error(validate);
    } else {
      const datas = await getRegisterOtp("jksd", phone, companyName);
      if (!datas) {
        toast.error(`${error ? error : "Oops somthing went wrong"}`);
      } else {
        toast.success("otp send");
        setOtp(true);
      }
    }
  };

  const handleSubmit = async () => {
    const registerData = await tenantRegister("", {
      companyName,
      adminName,
      phone,
      email,
      country,
      city,
      address,
      password,
      postalCode,
      otpNumber,
    });

    console.log(registerData);
    if (userState?.error || `${!registerData}`) {
      toast.error(`${userState?.error ? userState?.error : "Invalid OTP"}`);
    }

    if (`${registerData}` === "success") {
      router.push(`/`);
    }
  };

  return (
    <div className={styles.buyerFormDiv}>
      {otp ? (
        <OtpComponent setOtpNumber={setOtpNumber} handleSubmit={handleSubmit} />
      ) : (
        <BuyFormComponent
          formTitle={"Register your company"}
          setPostalCode={setPostalCode}
          setPassword={setPassword}
          setAddress={setAddress}
          handleOtp={handleOtp}
          setCity={setCity}
          setCountry={setCountry}
          setEmail={setEmail}
          setPhone={setPhone}
          setAdminName={setAdminName}
          setCompanyName={setCompanyName}
        />
      )}
    </div>
  );
};

export default BuyProductComponent;
