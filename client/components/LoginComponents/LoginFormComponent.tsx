import React from "react";
import styles from "../../styles/buyProduct.module.scss";
import VerticalInputDiv from "../FormComponents/VerticalInputDiv";

const LoginFormComponent = ({
  setCompanyName,
  setPhone,
  setPassword,
  handleLogin,
}: {
  setCompanyName: Function;
  setPhone: Function;
  setPassword: Function;
  handleLogin: any;
}) => {
  return (
    <form className={styles.buyerForm} onSubmit={handleLogin}>
      <h1>Login</h1>
      <VerticalInputDiv
        label="Company name"
        placeholder=""
        type="text"
        callBack={setCompanyName}
      />

      <VerticalInputDiv
        label="Phone"
        placeholder=""
        type="number"
        callBack={setPhone}
      />

      <VerticalInputDiv
        label="Password"
        placeholder=""
        type="password"
        callBack={setPassword}
      />

      <button type="submit" style={{ cursor: "pointer" }}>
        Login
      </button>
    </form>
  );
};

export default LoginFormComponent;
