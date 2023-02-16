import React from "react";
import AllJobMainComponent from "../../../components/JobComponent/allJobs/AllJobMainComponents";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import CompanyLayout from "../../../components/layout/companyLayout/CompanyLayout";


const index = () => {
  return (
    <CompanyLayout title="All Jobs">
      <div style={{ marginTop: "10px" }}>
        <SubHeader text="All Jobs" />
        <AllJobMainComponent />
      </div>
    </CompanyLayout>
  );
};

export default index;
