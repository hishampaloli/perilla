import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetEmployeeProfileState } from "../../models/profile";
import style from "../../styles/profile.module.scss";
import BankDetailsComponent from "./BankDetailsComponent";
import PersonalDataComponent from "./PersonalDataComponent";
import SalaryDetailsComponent from "./SalaryDetailsComponent";

const ProfileNav = () => {
  const { data, error, loading }: GetEmployeeProfileState = useTypedSelector(
    (state) => state.employeeProfile
  );

  const employeeData = data?.data;
  const [nav, setNav] = useState<string>("profile");
  return (
    <>
      <div className={style.profileNav}>
        <h2
          onClick={() => setNav("profile")}
          className={nav === "profile" ? style.isActive : ""}
        >
          Profile
        </h2>
        <h2
          className={nav === "project" ? style.isActive : ""}
          onClick={() => setNav("project")}
        >
          Projects
        </h2>
        <h2
          className={nav === "bank" ? style.isActive : ""}
          onClick={() => setNav("bank")}
        >
          Bank detail
        </h2>

        <h2
          className={nav === "salary" ? style.isActive : ""}
          onClick={() => setNav("salary")}
        >
          Salary Details
        </h2>
      </div>

      <div>
        {nav === "profile" ? (
          <PersonalDataComponent />
        ) : nav === "project" ? (
          "Project"
        ) : nav === "bank" ? (
          <BankDetailsComponent bankDetails={employeeData?.bankDetails!} />
        ) : (
          <SalaryDetailsComponent />
        )}
      </div>
    </>
  );
};

export default ProfileNav;
