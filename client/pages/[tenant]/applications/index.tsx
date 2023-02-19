import React from "react";
import AllApplicationListMainComp from "../../../components/applicationComponent/allApplications/AllApplicationListMainComp";
import AllJobMainComponent from "../../../components/JobComponent/allJobs/AllJobMainComponents";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import CompanyLayout from "../../../components/layout/companyLayout/CompanyLayout";
import { wrapper } from "../../../redux";
import { getAllApplication, getAllJobs } from "../../../redux/action-creaters";
import style from "../../../styles/CompanyLaout.module.scss";

const index = () => {
  return (
    <CompanyLayout loc="job" title="All Applications">
      <div className={style.CompanyLayoutMain}>
        <SubHeader text="All Applications" />
        <AllApplicationListMainComp />
      </div>
    </CompanyLayout>
  );
};

export default index;
