import React from "react";
import { PersonalInformation } from "../../models/profile";
import style from "../../styles/profile.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import { GetMyProfileState } from "../../models/employee";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const PersonalInformationComponents = ({
  personalData,
  setEdit,
}: {
  personalData: PersonalInformation;
  setEdit: any;
}) => {
  const { data, error, loading }: GetMyProfileState = useTypedSelector(
    (state) => state.myProfile
  );

  return (
    <div className={style.peronalInfo}>
      {data?.data?.email && (
        <div className={style.edt}>
          <span
            onClick={() => setEdit(true)}
            className={`${style.Icon} ${style.edtIcon}`}
          >
            <EditIcon />
          </span>{" "}
        </div>
      )}
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
