import React from "react";
import EmergencyContactComponent from "./EmergencyContactComponent";
import PersonalInformationComponents from "./PersonalInformationComponents";
import style from "../../styles/profile.module.scss";

const PersonalDataComponent = () => {
  return (
    <div className={style.personalDataMain}>
      <PersonalInformationComponents />
      <EmergencyContactComponent />
    </div>
  );
};

export default PersonalDataComponent;
