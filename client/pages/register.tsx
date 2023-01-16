import React, { useEffect } from "react";
import { useActions } from "../hooks/useAction";
import Layout from "../components/layout/Layout";
import BuyProductComponent from "../components/RegisterComponents/RegisterComponent";
import styles from "../styles/buyProduct.module.scss";
import LogoImage from "../components/layout/LogoImage";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useTenantData } from "../hooks/useTenantData";
import Router from "next/router";
import { useIsLogged } from "../hooks/useAuth";

const Register = () => {
  useIsLogged();

  return (
    <Layout title="Buy Product">
      <div className={styles.buyProduct}>
        <LogoImage />
        <BuyProductComponent />
      </div>
    </Layout>
  );
};

export default Register;
