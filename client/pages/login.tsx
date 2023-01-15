import React from 'react'
import Layout from '../components/layout/Layout';
import LogoImage from '../components/layout/LogoImage';
import LoginComponent from '../components/LoginComponents/LoginComponent';
import styles from "../styles/buyProduct.module.scss";

const login = () => {
  return (
    <Layout title="Login">
      <div className={styles.buyProduct}>
        <LogoImage />
        <LoginComponent />
      </div>
    </Layout>
  )
}

export default login
