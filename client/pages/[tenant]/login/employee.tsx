import React from "react";
import EmployeeLoginComponent from "../../../components/EmployeeLogin/EmployeeLoginComponent";
import CompanyLayout from "../../../components/layout/companyLayout/CompanyLayout";
import styles from "../../../styles/buyProduct.module.scss";

const employee = () => {
  return (
    <CompanyLayout loc="emplogin" title="Company">
      <div className={styles.buyProduct}>
        <EmployeeLoginComponent />
      </div>
    </CompanyLayout>
  );
};

export default employee;
