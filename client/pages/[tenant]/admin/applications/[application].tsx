import React from "react";
import SingleApplicationMainComponent from "../../../../components/applicationComponent/singleApplication/SingleApplicationMainComponent";
import SubHeader from "../../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../../components/layout/MainLayout";

const jo = () => {
  return (
    <MainLayout title="Jobs View">
      <SubHeader text="Job Details" />
      <SingleApplicationMainComponent />
    </MainLayout>
  );
};

export default jo;
