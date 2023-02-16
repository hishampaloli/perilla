import React from "react";

import AllJobMainComponent from "../../../components/JobComponent/allJobs/AllJobMainComponents";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import AdminLayout from "../../../components/layout/MainLayout";

const jobs = () => {
  return (
    <AdminLayout title="Jobs">
      <SubHeader text="Jobs" />
      <AllJobMainComponent />
    </AdminLayout>
  );
};

export default jobs;
