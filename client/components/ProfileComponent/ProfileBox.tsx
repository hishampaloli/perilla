import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetEmployeeProfileState } from "../../models/profile";
import style from "../../styles/profile.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import Spinner from "../layout/SpinnerComponent";
import { AuthState } from "../../models/tenants";
import DeleteIcon from "@mui/icons-material/Delete";
import ListPTagComponent from "../SegemanticComponents/ListPTagComponent";
import swal from "sweetalert";
import { useDeleteEmployee } from "../../hooks/useSwal";
import { useActions } from "../../hooks/useAction";
import KeyIcon from "@mui/icons-material/Key";
import { GetMyProfileState } from "../../models/employee";

const ProfileBox = ({ setEdit, setPass }: { setEdit: any; setPass: any }) => {
  const { data, error, loading }: GetEmployeeProfileState = useTypedSelector(
    (state) => state.employeeProfile
  );

  const employeeProfile: GetMyProfileState = useTypedSelector(
    (state) => state.myProfile
  );

  const user: AuthState = useTypedSelector((state) => state.user);

  const employeeData = data?.data ? data?.data : employeeProfile?.data?.data;
  
  
  const { removeEmployee } = useActions();

  const handleDelete = () => {
    useDeleteEmployee(employeeData?._id!, removeEmployee);
  };

  return (
    <div className={style.profileBox}>
      {user.data?.data.adminName && (
        <div className={style.edtIconDiv}>
          <span
            onClick={() => setPass(true)}
            className={`${style.Icon} ${style.passIcon}`}
          >
            <KeyIcon />
          </span>{" "}
          <span
            onClick={handleDelete}
            className={`${style.Icon} ${style.dltIcon}`}
          >
            <DeleteIcon />
          </span>
          <span
            onClick={() => setEdit(true)}
            className={`${style.Icon} ${style.edtIcon}`}
          >
            <EditIcon />
          </span>{" "}
        </div>
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
        <ListPTagComponent
          strong="Phone"
          span={employeeData?.phone.toString()!}
        />
        <ListPTagComponent strong="Email" span={employeeData?.email!} />
        <ListPTagComponent
          strong="Is Active"
          span={!employeeData?.isBlocked ? "True" : "False"}
        />
        <ListPTagComponent
          strong="Role"
          span={employeeData?.role === "hr" ? "Hr" : "Employee"}
        />

        <ListPTagComponent strong="Password" span={"XXXXXXXXXXX"} />
      </div>
    </div>
  );
};

export default ProfileBox;
