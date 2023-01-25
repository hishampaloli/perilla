import React from "react";
import EmergencyContactComponent from "./EmergencyContactComponent";
import PersonalInformationComponents from "./PersonalInformationComponents";
import style from "../../styles/profile.module.scss";
import { GetEmployeeProfileState } from "../../models/profile";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetMyProfileState } from "../../models/employee";

const PersonalDataComponent = () => {
  const { data, error, loading }: GetEmployeeProfileState = useTypedSelector(
    (state) => state.employeeProfile
  );

  const employeeProfile: GetMyProfileState = useTypedSelector(
    (state) => state.myProfile
  );

  const employeeData = data?.data ? data.data : employeeProfile?.data?.data;

  return (
    <div className={style.personalDataMain}>
      <PersonalInformationComponents
        personalData={employeeData?.personalInformation!}
      />
      <EmergencyContactComponent
        emergencyContact={employeeData?.emergencyContact!}
      />
    </div>
  );
};

export default PersonalDataComponent;
