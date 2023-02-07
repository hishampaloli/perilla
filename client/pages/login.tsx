import { Head } from "next/document";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import LogoImage from "../components/layout/LogoImage";
import LoginComponent from "../components/LoginComponents/LoginComponent";
import { useIsLogged } from "../hooks/useAuth";
import { useTenantData } from "../hooks/useTenantData";
import styles from "../styles/buyProduct.module.scss";

const login = () => {
  useIsLogged();

  return (
    <Layout title="Login">
      <div className={styles.buyProduct}>
        <LogoImage />
        <LoginComponent />
      </div>    
    </Layout>
  );
};

export default login;
