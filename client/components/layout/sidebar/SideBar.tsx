import React, { useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { AuthState } from "../../../models/tenants";
import style from "../../../styles/sideBar.module.scss";
import AdminSideBar from "./adminSideBar/AdminSideBar";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { EmployeeAuthState } from "../../../models/employee";
import EmployeeSideBar from "./employeeSideBar/EmployeeSideBar";
import HrSideBar from "./hrSideBar/HrSideBar";
import UserSideBar from "./userSideBar/UserSideBar";

const SideBar = ({ mainSmall }: { mainSmall: any }) => {
  const { data }: AuthState = useTypedSelector((state) => state.user);
  const employee: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  const googleData = useTypedSelector((state) => state.googleData);
  const [small, setSmall] = useState(false);
  console.log(employee);
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
      {employee?.data?.role === "employees" && <EmployeeSideBar />}
      {employee?.data?.role === "hr" && <HrSideBar />}
      {googleData?.data?.email && <UserSideBar />}
    </div>
  );
};

export default SideBar;
