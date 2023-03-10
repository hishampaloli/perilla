import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetMyProfileState } from "../../models/employee";
import { GetEmployeeProfileState } from "../../models/profile";
import { AuthState } from "../../models/tenants";
import style from "../../styles/profile.module.scss";
import ProjectListComponent from "../ProjectPage/ProjectListComponent";
import BankDetailsComponent from "./BankDetailsComponent";
import PersonalDataComponent from "./PersonalDataComponent";
import ProjectBox from "./ProjectBox";
import SalaryDetailsComponent from "./SalaryDetailsComponent";

const ProfileNav = ({
  setEditBank,
  setEditPersonal,
  setEditEmergencyContact,
}: {
  setEditBank: any;
  setEditPersonal: any;
  setEditEmergencyContact: any;
}) => {
  const { data, error, loading }: GetEmployeeProfileState = useTypedSelector(
    (state) => state.employeeProfile
  );

  const employeeProfile: GetMyProfileState = useTypedSelector(
    (state) => state.myProfile
  );

  const tenant: AuthState = useTypedSelector((state) => state.user);

  const employeeData = data?.data ? data.data : employeeProfile?.data?.data;
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

        {data?.data?.role !== "hr" && (
          <h2
            className={nav === "project" ? style.isActive : ""}
            onClick={() => setNav("project")}
          >
            Projects
          </h2>
        )}

        {(employeeProfile.data?.data.email || tenant.data?.data.email) && (
          <>
            {" "}
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
          </>
        )}
      </div>

      <div>
        {nav === "profile" ? (
          <PersonalDataComponent
            setEditEmergencyContact={setEditEmergencyContact}
            setEdit={setEditPersonal}
          />
        ) : nav === "project" ? (
          <ProjectBox type="employee" />
        ) : nav === "bank" ? (
          <BankDetailsComponent
            setEditBank={setEditBank}
            bankDetails={employeeData?.bankDetails!}
          />
        ) : (
          <SalaryDetailsComponent />
        )}
      </div>
    </>
  );
};

export default ProfileNav;
