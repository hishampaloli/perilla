import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { AllApplicationsState } from "../../../models/job";
import style from "../../../styles/application.module.scss";
import ApplicationListBox from "./ApplicationListBox";
import ApplicationSearchComponent from "./ApplicationSearchComponent";

const AllApplicationListMainComp = () => {
  const { data, loading }: AllApplicationsState = useTypedSelector(
    (state) => state.allApplications
  );

  return (
    <div className={style.applicationStatus}>
      <ApplicationSearchComponent />
      <ApplicationListBox data={data?.data} loading={loading} />
    </div>
  );
};

export default AllApplicationListMainComp;
