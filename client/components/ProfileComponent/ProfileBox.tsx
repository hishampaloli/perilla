import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetEmployeeProfileState } from "../../models/profile";
import style from "../../styles/profile.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import Spinner from "../layout/SpinnerComponent";
import { AuthState } from "../../models/tenants";

const ProfileBox = ({ setEdit }: { setEdit: any }) => {
  const { data, error, loading }: GetEmployeeProfileState = useTypedSelector(
    (state) => state.employeeProfile
  );

  const user: AuthState = useTypedSelector((state) => state.user);

  const employeeData = data?.data;

  return (
    <div className={style.profileBox}>
      {user.data?.data.adminName && (
        <span onClick={() => setEdit(true)} className={style.edtIcon}>
          <EditIcon />
        </span>
      )}

      <div className={style.profileLeft}>
        <img src={employeeData?.image} alt="" />

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
