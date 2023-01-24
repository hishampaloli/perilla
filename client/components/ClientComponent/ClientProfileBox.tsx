import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  GetClientProfileState,
  GetEmployeeProfileState,
} from "../../models/profile";
import style from "../../styles/profile.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import { AuthState } from "../../models/tenants";
import EditClientForm from "./EditClientComponent";

const ClientProfileBox = ({ setEdit }: { setEdit: any }) => {
  const { data, error, loading }: GetClientProfileState = useTypedSelector(
    (state) => state.clientProfile
  );
  const user: AuthState = useTypedSelector((state) => state.user);

  const clientData = data?.data;
  console.log(clientData);

  return (
    <div className={style.profileBox}>
      {user.data?.data.adminName && (
        <div className={style.edtIconDiv}>
        <span onClick={() => setEdit(true)} className={`${style.Icon} ${style.edtIcon}`}>
          <EditIcon />
        </span>
        </div>
      )}
      <div className={style.profileLeft}>
        <img src={clientData?.image} alt="" />

        <div>
          <h2>{clientData?.clientName}</h2>
          <p className={style.mp}>{clientData?.clientCompany}</p>

          <strong>Client ID : {clientData?.clientId}</strong>
          <p>{clientData?.address}</p>

          <button>Message</button>
        </div>
      </div>
      <div className={style.profileRight}>
        <p>
          <strong>Phone :</strong> <span>{clientData?.phone}</span>
        </p>
        <p>
          <strong>Email :</strong> <span>{clientData?.email}</span>
        </p>
        <p>
          <strong>Gender :</strong> <span>{clientData?.gender}</span>
        </p>
        <p>
          <strong>Company Name :</strong>{" "}
          <span>{clientData?.clientCompany}</span>
        </p>
        <p>
          <strong>Address :</strong> <span>{clientData?.address}</span>
        </p>
      </div>
    </div>
  );
};

export default ClientProfileBox;
