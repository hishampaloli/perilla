import Link from "next/link";
import React from "react";
import style from "../../styles/leaveView.module.scss";

const LeaveViewRight = ({ employeeData }: { employeeData: any }) => {
  return (
    <div className={style.leaveViewRight}>
      <h3>{employeeData?.role !== "hr" ? "Assigned To" : "Assigned By"}</h3>
      <div className={style.innerBox}>
        <Link
          href={`/${employeeData?.companyName}/profile/employee/${employeeData?.phone}`}
        >
          <img src={employeeData?.image} alt="" />
        </Link>

        <div className={style.box}>
          <div>
            <strong>Name : </strong>
            <p>{employeeData?.name}</p>
          </div>

          <div>
            <strong>Email : </strong>
            <p>{employeeData?.email}</p>
          </div>

          <div>
            <strong>Employee ID : </strong>
            <p>{employeeData?.employeeId}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveViewRight;
