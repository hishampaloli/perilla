import React from "react";
import AllJobMainComponent from "../../../components/JobComponent/allJobs/AllJobMainComponents";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import CompanyLayout from "../../../components/layout/companyLayout/CompanyLayout";
import { wrapper } from "../../../redux";
import { getAllJobs } from "../../../redux/action-creaters";
import style from "../../../styles/CompanyLaout.module.scss";

const index = () => {
  return (
    <CompanyLayout loc="job" title="All Jobs">
      <div className={style.CompanyLayoutMain}>
        <SubHeader text="All Jobs" />
        <AllJobMainComponent />
      </div>
    </CompanyLayout>
  );
};

export default index;

index.getInitialProps = wrapper.getInitialPageProps(
  (store) => async (context) => {
    await store.dispatch(getAllJobs(context, context.query.tenant, "open"));
    return {};
  }
);
