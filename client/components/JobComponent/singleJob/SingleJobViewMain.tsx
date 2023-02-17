import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useActions } from "../../../hooks/useAction";
import style from "../../../styles/jobViewComponent.module.scss";
import JobViewLeft from "./JobViewLeft";
import JObViewRight from "./JObViewRight";

const SingleJobViewMain = () => {
  const router = useRouter();
  const { getSingleJobs } = useActions();

  useEffect(() => {
    if (router.isReady) {
      getSingleJobs("req", router.query.job);
    }
  }, [router.isReady]);
  return (
    <div className={style.jobViewComponentMain}>
      <JobViewLeft />
      <JObViewRight />
    </div>
  );
};

export default SingleJobViewMain;
