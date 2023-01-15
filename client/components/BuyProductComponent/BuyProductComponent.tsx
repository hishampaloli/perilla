import React, { useState } from "react";
import VerticalInputDiv from "../FormComponents/VerticalInputDiv";
import styles from "../../styles/buyProduct.module.scss";
import BuyFormComponent from "./BuyFormComponent";
import OtpComponent from "../OtpComponent/OtpComponent";

const BuyProductComponent = () => {
  const [otp, setOtp] = useState<boolean>(false);

  return (
    <div className={styles.buyerFormDiv}>
      {otp ? <OtpComponent /> : <BuyFormComponent setOtp={setOtp} />}
    </div>
  );
};

export default BuyProductComponent;
