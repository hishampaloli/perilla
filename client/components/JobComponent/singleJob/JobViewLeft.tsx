import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { GetSingleJobState } from "../../../models/job";
import style from "../../../styles/jobViewComponent.module.scss";
import FixedSpinner from "../../layout/FixedSpinner";
import LeftBottomComponent from "./JobHelperComponents/LeftBottomComponent";
import LeftTopComponent from "./JobHelperComponents/LeftTopComponent";

const JobViewLeft = () => {
  const { data, loading }: GetSingleJobState = useTypedSelector(
    (state) => state.singleJob
  );
  return (

    <div className={style.jobViewLeft}>
        {loading && <FixedSpinner />}
      <LeftTopComponent data={data?.data!} />
      <LeftBottomComponent data={data?.data!} />
    </div>
  );
};

export default JobViewLeft;
