import React, { useState } from "react";
import VerticalInputDiv from "../FormComponents/VerticalInputDiv";
import styles from "../../styles/buyProduct.module.scss";
import { useActions } from "../../hooks/useAction";
import { useTenantRegisterValidator } from "../../hooks/useValidate";
import { toast } from "react-toastify";

const BuyFormComponent = ({ setOtp }: { setOtp: any }): JSX.Element => {
  const [companyName, setCompanyName] = useState<string>("");
  const [adminName, setAdminName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");

  const { getOtp, buyProduct } = useActions();

  const handleOtp = (e: React.SyntheticEvent) => {
    e.preventDefault();
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

    if (validate) {
      toast.error(validate);
    } else {
      getOtp("jksd", phone);
    }
  };
  return (
    <form className={styles.buyerForm} onSubmit={handleOtp}>
      <h1>Register Your Company</h1>
      <VerticalInputDiv
        label="Company name"
        placeholder=""
        type="text"
        callBack={setCompanyName}
      />

      <VerticalInputDiv
        label="Admin name"
        placeholder=""
        type="text"
        callBack={setAdminName}
      />

      <VerticalInputDiv
        label="Phone"
        placeholder=""
        type="number"
        callBack={setPhone}
      />

      <VerticalInputDiv
        label="Email"
        placeholder=""
        type="email"
        callBack={setEmail}
      />

      <VerticalInputDiv
        label="Password"
        placeholder=""
        type="password"
        callBack={setPassword}
      />

      <VerticalInputDiv
        label="Country"
        placeholder=""
        type="text"
        callBack={setCountry}
      />

      <VerticalInputDiv
        label="city"
        placeholder=""
        type="text"
        callBack={setCity}
      />

      <VerticalInputDiv
        label="Postal code"
        placeholder=""
        type="number"
        callBack={setPostalCode}
      />

      <VerticalInputDiv
        label="address"
        placeholder=""
        type="text"
        callBack={setAddress}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BuyFormComponent;
