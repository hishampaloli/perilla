import React from "react";
import styles from "../../styles/otp.module.scss";

const OtpComponent = ({
  setOtpNumber,
  handleSubmit,
}: {
  setOtpNumber: Function;
  handleSubmit: any;
}) => {
  return (
    <div className={styles.otpPage}>
      <h1>OTP</h1>
      <p>Verify your account</p>
      <input type="number" onChange={(e) => setOtpNumber(e.target.value)} />
      <button  onClick={handleSubmit}>Enter</button>
      <div>
        <p>Not yet received?</p>{" "}
        <p style={{ marginLeft: "10px" }}>Resent OTP</p>
      </div>
    </div>
  );
};

export default OtpComponent;
