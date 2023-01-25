import React, { useState } from "react";
import style from "../../styles/profile.module.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import ChangePassForm from "./ChangePassForm";
import SalaryFormComponent from "./SalaryFormComponent";
import EditIcon from "@mui/icons-material/Edit";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthState } from "../../models/tenants";
import SalaryDetailsBox from "./SalaryDetailsBox";

const SalaryDetailsComponent = () => {
  const [edit, setEdit] = useState<boolean>(false);

  const user: AuthState = useTypedSelector((state) => state.user);

  return (
    <>
      <div className={style.bankDetails}>
        <SalaryDetailsBox />
        {user.data?.data.adminName && (
          <div className={style.edtIconDiv}>
            <span
              onClick={() => setEdit(true)}
              className={`${style.Icon} ${style.edtIcon}`}
            >
              <EditIcon />
            </span>{" "}
          </div>
        )}
      </div>
      {edit && <SalaryFormComponent setEdit={setEdit} />}
    </>
  );
};

export default SalaryDetailsComponent;
