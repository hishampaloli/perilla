import React, { useState } from "react";
import VerticalInputDiv from "../FormComponents/VerticalInputDiv";
import styles from "../../styles/buyProduct.module.scss";
import { useActions } from "../../hooks/useAction";
import { useTenantRegisterValidator } from "../../hooks/useValidate";
import { toast } from "react-toastify";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetOtpState } from "../../models/tenants";

const BuyFormComponent = ({
  setCompanyName,
  setAdminName,
  setPhone,
  setEmail,
  setCountry,
  setCity,
  setAddress,
  handleOtp,
  setPassword,
  setPostalCode,
  formTitle,
}: {
  setCompanyName: Function;
  setAdminName: Function;
  setPhone: Function;
  setEmail: Function;
  setCountry: Function;
  setCity: Function;
  setAddress: Function;
  handleOtp: any;
  setPassword: Function;
  setPostalCode: Function;
  formTitle: string;
}): JSX.Element => {
  return (
    <form className={styles.buyerForm} onSubmit={handleOtp}>
      <h1>{formTitle}</h1>
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
