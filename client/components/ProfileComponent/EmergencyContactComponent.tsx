import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetMyProfileState } from "../../models/employee";
import { EmergencyContact } from "../../models/profile";
import EditIcon from "@mui/icons-material/Edit";
import style from "../../styles/profile.module.scss";

const EmergencyContactComponent = ({
  emergencyContact,
  setEditEmergencyContact,
}: {
  emergencyContact: EmergencyContact;
  setEditEmergencyContact: any;
}) => {
  const { data, error, loading }: GetMyProfileState = useTypedSelector(
    (state) => state.myProfile
  );

  return (
    <div className={style.emergencyContact}>
      {data?.data?.email && (
        <div className={style.edt}>
          <span
            onClick={() => setEditEmergencyContact(true)}
            className={`${style.Icon} ${style.edtIcon}`}
          >
            <EditIcon />
          </span>{" "}
        </div>
      )}
      <h2>Emergency Contact</h2>

      <ul className={style.persnalUl}>
        <div>
          <h3>Primary Contact</h3>
          <strong>Name : </strong>
          <strong>Phone No : </strong>
          <strong>Other Info: </strong>

          <h3>Secondary Contact</h3>
          <strong>Name : </strong>
          <strong>Phone No : </strong>
          <strong>Other Info: </strong>
        </div>
        <div>
          <h4></h4>
          <span>{emergencyContact?.primary?.name}</span>
          <span>{emergencyContact?.primary?.phone}</span>
          <span>{emergencyContact?.primary?.otherInfo}</span>
          <h4></h4>
          <span>{emergencyContact?.secondary?.name}</span>
          <span>{emergencyContact?.secondary?.phone}</span>
          <span>{emergencyContact?.secondary?.otherInfo}</span>
        </div>
      </ul>
    </div>
  );
};

export default EmergencyContactComponent;
