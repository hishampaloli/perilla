import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetEmployeeProfileState } from "../../models/profile";
import style from "../../styles/profile.module.scss";
import SubmitButton from "../AddFormComponent/SubmitButton";

const ProfileBox = () => {
  const { data, error, loading }: GetEmployeeProfileState = useTypedSelector(
    (state) => state.employeeProfile
  );

  const employeeData = data?.data;

  return (
    <div className={style.profileBox}>
      <div className={style.profileLeft}>
        <img
          src="https://www.gravatar.com/avatar/c2238a57f4607103adc137e3955581c0?d=retro"
          alt=""
        />

        <div>
          <h2>{employeeData?.name}</h2>
          <p className={style.mp}>{employeeData?.designation}</p>

          <strong>Employee ID : {employeeData?.employeeId}</strong>
          <p>
            date of Join: {employeeData?.joiningDate?.toString()?.slice(0, 10)}
          </p>

          <button>Message</button>
        </div>
      </div>
      <div className={style.profileRight}>
        <p>
          <strong>Phone :</strong> <span>{employeeData?.phone}</span>
        </p>
        <p>
          <strong>Email :</strong> <span>{employeeData?.email}</span>
        </p>
        <p>
          <strong>Is Active :</strong>{" "}
          <span>{!employeeData?.isBlocked ? "True" : "False"}</span>
        </p>
        <p>
          <strong>Role :</strong>{" "}
          <span>{employeeData?.role === "hr" ? "Hr" : "Employee"}</span>
        </p>
        <p>
          <strong>Password :</strong> <span>XXXXXXX</span>
        </p>
      </div>
    </div>
  );
};

export default ProfileBox;
