import React from "react";
import SingleJobViewMain from "../../../components/JobComponent/singleJob/SingleJobViewMain";
import CompanyLayout from "../../../components/layout/companyLayout/CompanyLayout";
import style from "../../../styles/CompanyLaout.module.scss";

const Jobs = () => {
  return (
    <CompanyLayout title="Jobs">
      <div className={style.CompanyLayoutMain}>
        <SingleJobViewMain />
      </div>
    </CompanyLayout>
  );
};

export default Jobs;
