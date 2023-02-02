import Link from "next/link";
import React from "react";
import style from "../../styles/leaveRequests.module.scss";
import NoDataCopmonent from "../layout/NoDataCopmonent";
import VisibilityIcon from "@mui/icons-material/Visibility";

const LeaveRequestList = () => {
  const data: any = "ads";
  const loading: any = "sd";
  return (
    <div className={style.employeelistDiv}>
      <div>
        <p>Name</p>
        <p>Email</p>
        <p>Reason</p>
        <p>Duration</p>
        <p>Role</p>
      </div>

      {data?.data?.length && !loading ? (
        data?.data?.map((el: any) => {
          return (
            <Link
              href={`/${el?.companyName}/profile/employee/${el.phone}`}
              className={style.bankDetailDiv}
            >
              <p>
                <img src={el.image} alt="" />
                {el.name}
              </p>
              <p>{el.email}</p>
              <p>{el.designation}</p>
              <p>{el.phone}</p>
              <p>{el.role}</p>
              <p>
                <VisibilityIcon />
              </p>
            </Link>
          );
        })
      ) : (
        <NoDataCopmonent text={`No Leave requests found`} />
      )}
    </div>
  );
};

export default LeaveRequestList;
