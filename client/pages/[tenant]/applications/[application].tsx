import React from "react";
import SingleApplicationComponentMain from "../../../components/applicationComponent/singleApplication/SingleApplicationMainComponent";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import CompanyLayout from "../../../components/layout/companyLayout/CompanyLayout";
import MainLayout from "../../../components/layout/MainLayout";
import style from "../../../styles/CompanyLaout.module.scss";

const index = () => {
  return (
    <CompanyLayout loc="job" title="Applications">
      <div className={style.CompanyLayoutMain}>
        <SubHeader text="Applications" />
        <SingleApplicationComponentMain />
      </div>
    </CompanyLayout>
  );
};

export default index;
