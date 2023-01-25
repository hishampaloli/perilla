import React, { useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { AuthState } from "../../../models/tenants";
import style from "../../../styles/sideBar.module.scss";
import AdminSideBar from "./adminSideBar/AdminSideBar";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { EmployeeAuthState } from "../../../models/employee";
import EmployeeSideBar from "./employeeSideBar/EmployeeSideBar";

const SideBar = ({ mainSmall }: { mainSmall: any }) => {
  const { data }: AuthState = useTypedSelector((state) => state.user);
  const employee: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );
  const [small, setSmall] = useState(false);
  return (
    <div className={small ? style.sidebarMain : style.sidebarMainSmall}>
      <button
        className={style.sideBtn}
        onClick={() => {
          setSmall(!small);
          mainSmall(!small);
        }}
      >
        {!small ? <NavigateNextIcon /> : <NavigateBeforeIcon />}
      </button>

      {data?.data.companyName && <AdminSideBar />}
      {employee.data?.email && <EmployeeSideBar />}
    </div>
  );
};

export default SideBar;
