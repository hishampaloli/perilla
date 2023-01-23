import React from "react";
import { PersonalInformation } from "../../models/profile";
import style from "../../styles/profile.module.scss";

const PersonalInformationComponents = ({
  personalData,
}: {
  personalData: PersonalInformation;
}) => {
  return (
    <div className={style.peronalInfo}>
      <h2>Personal Information</h2>
      <ul className={style.persnalUl}>
        <div>
          <strong>Nationality : </strong> <strong>Religion : </strong>{" "}
          <strong>Martial Status : </strong> <strong>Passport Number : </strong>{" "}
          <strong>Employment of partner : </strong>{" "}
          <strong>No of Children : </strong>{" "}
        </div>
        <div>
          <span>{personalData?.nationality}</span>
          <span>{personalData?.religion}</span>
          <span>{personalData?.martialStatus}</span>
          <span>{personalData?.passportNumber}</span>
          <span>{personalData?.employementOfPartner}</span>
          <span>{personalData?.noOfChildren}</span>
        </div>
      </ul>
    </div>
  );
};

export default PersonalInformationComponents;
