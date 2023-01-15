import React from "react";
import { useActions } from "../hooks/useAction";
import Layout from "../components/layout/Layout";
import BuyProductComponent from "../components/BuyProductComponent/BuyProductComponent";
import styles from "../styles/buyProduct.module.scss";
import LogoImage from "../components/layout/LogoImage";

const Buy = () => {
  const { buyProduct } = useActions();
  return (
    <Layout title="Buy Product">
      <div className={styles.buyProduct}>
        <LogoImage />
        <BuyProductComponent />
      </div>
    </Layout>
  );
};

export default Buy;
