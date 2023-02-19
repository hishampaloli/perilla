import { useRouter } from "next/router";
import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { GetSingleJobState } from "../../../models/job";
import { AuthState } from "../../../models/tenants";
import style from "../../../styles/jobViewComponent.module.scss";
import FixedSpinner from "../../layout/FixedSpinner";
import ApplicationNav from "./ApplicationNav";
import LeftBottomComponent from "./JobHelperComponents/LeftBottomComponent";
import LeftTopComponent from "./JobHelperComponents/LeftTopComponent";

const JobViewLeft = () => {
  const { data, loading }: GetSingleJobState = useTypedSelector(
    (state) => state.singleJob
  );
  const tenant: AuthState = useTypedSelector((state) => state.user);
  const router = useRouter();

  return (
    <div className={style.jobViewLeft}>
      {loading && <FixedSpinner />}
      <LeftTopComponent data={data?.data!} />
      <LeftBottomComponent data={data?.data!} />
      {tenant.data?.data.companyName === router.query.tenant && (
        <ApplicationNav />
      )}
    </div>
  );
};

export default JobViewLeft;
