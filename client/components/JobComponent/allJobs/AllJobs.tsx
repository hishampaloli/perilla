import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useActions } from "../../../hooks/useAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { GetAllJobsState, JobData } from "../../../models/job";
import styles from "../../../styles/job.module.scss";
import NoDataCopmonent from "../../layout/NoDataCopmonent";
import Spinner from "../../layout/SpinnerComponent";
import SingleJobPostComp from "./SingleJobPostComp";

const AllJobs = () => {
  const { data, error, loading }: GetAllJobsState = useTypedSelector(
    (state) => state.allJobs
  );

  return (
    <div className={styles.allJobsDiv}>
      {loading && <Spinner />}
      {!loading && !data?.data.length && (
        <NoDataCopmonent text="No Job Posts" />
      )}
      {data?.data.map((el: JobData) => {
        return <SingleJobPostComp data={el} />;
      })}
    </div>
  );
};

export default AllJobs;
