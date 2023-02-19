import Link from "next/link";
import React from "react";
import style from "../../../styles/application.module.scss";
import NoDataCopmonent from "../../layout/NoDataCopmonent";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  GetLeaveReqState,
  LeaveData,
  LeaveDataArr,
  LeaveDataObj,
} from "../../../models/Leave";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import FixedSpinner from "../../layout/FixedSpinner";
import { AllApplicationsState, ApplicationData } from "../../../models/job";
import { useRouter } from "next/router";
import { AuthState } from "../../../models/tenants";

const ApplicationListBox = ({
  data,
  loading,
}: {
  data: any;
  loading: boolean;
}) => {
  const router = useRouter();
  const tenant: AuthState = useTypedSelector((state) => state.user);
  return (
    <div className={style.applicationlistDiv}>
      <div>
        <p>Name</p>
        <p>Job Title</p>
        <p>Last Date</p>
        <p>Status</p>
        <p>Experience</p>
      </div>

      {loading && <FixedSpinner />}
      {!loading && !data?.length && (
        <NoDataCopmonent text={`No Applications found`} />
      )}
      {data?.length > 0 &&
        data?.map((el: ApplicationData) => {
          let date = new Date(el.jobId.lastDate);
          return (
            <Link
              href={`/${router.query.tenant}/${
                tenant.data?.data.companyName ? "admin" : ""
              }/applications/${el._id}`}
              className={style.bankDetailDiv}
            >
              <p>
                <img src={el?.image} alt="" />
                {el?.name}
              </p>
              <p>{el?.jobId?.jobTitle}</p>
              <p>{date.toUTCString().slice(0, 17)}</p>
              <p>{el?.status}</p>
              <p>{el?.experience}</p>
              <p>
                <VisibilityIcon />
              </p>
            </Link>
          );
        })}
    </div>
  );
};

export default ApplicationListBox;
