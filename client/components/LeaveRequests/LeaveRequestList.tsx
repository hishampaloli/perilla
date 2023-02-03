import Link from "next/link";
import React from "react";
import style from "../../styles/leaveRequests.module.scss";
import NoDataCopmonent from "../layout/NoDataCopmonent";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  GetLeaveReqState,
  LeaveData,
  LeaveDataArr,
  LeaveDataObj,
} from "../../models/Leave";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import FixedSpinner from "../layout/FixedSpinner";

const LeaveRequestList = ({
  data,
  loading,
}: {
  data: any;
  loading: boolean;
}) => {
  return (
    <div className={style.employeelistDiv}>
      <div>
        <p>Name</p>
        <p>Email</p>
        <p>Reason</p>
        <p>Duration</p>
        <p>Role</p>
      </div>

      {loading && <FixedSpinner />}
      {!loading && !data?.length && (
        <NoDataCopmonent text={`No Leave requests found`} />
      )}
      {data?.length &&
        data?.map((el: LeaveData) => {
          return (
            <Link
              href={`/${el?.companyName}/leave/${el.id}`}
              className={style.bankDetailDiv}
            >
              <p>
                <img src={el.employeeId.image} alt="" />
                {el.employeeId.name}
              </p>
              <p>{el.employeeId.email}</p>
              <p>{el.reason.slice(0, 40)}...</p>
              <p>{el.leaveDuration}</p>
              <p>{el.employeeId.role}</p>
              <p>
                <VisibilityIcon />
              </p>
            </Link>
          );
        })}
    </div>
  );
};

export default LeaveRequestList;
