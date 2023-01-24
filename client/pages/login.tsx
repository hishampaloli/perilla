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
      <iframe
        width="350"
        height="430"
        allow="microphone;"
        src="https://console.dialogflow.com/api-client/demo/embedded/8d9f81d7-a206-40a8-a248-fb2113ce87d5"
      ></iframe>
    </Layout>
  );
};

export default login;
