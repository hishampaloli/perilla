import Link from "next/link";
import React from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { AuthState } from "../../../../models/tenants";
import style from "../../../../styles/sideBar.module.scss";

import DashboardIcon from "@mui/icons-material/Dashboard";
import LinkDiv from "./EmployeeLink";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import PaymentIcon from "@mui/icons-material/Payment";
import HouseboatIcon from "@mui/icons-material/Houseboat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";

const EmployeeSideBar = () => {
  const { data }: AuthState = useTypedSelector((state) => state.user);
  return (
    <div className={style.adminSideBarMain}>
      <LinkDiv text="Dash Board" link="dashboard" icon={<DashboardIcon />} />
      <LinkDiv text="Profile" link="profile" icon={<AccountCircleIcon />} />
      <LinkDiv text="My Tasks" link="hrs" icon={<SplitscreenIcon />} />{" "}
      <LinkDiv text="My Projects" link="projects" icon={<RocketLaunchIcon />} />
      <LinkDiv text="Leaves" link="holidays" icon={<HouseboatIcon />} />
      <LinkDiv text="My Payrolls" link="payrolls" icon={<PaymentIcon />} />
      <LinkDiv text="Chats" link="payrolls" icon={<ChatIcon />} />
    </div>
  );
};

export default EmployeeSideBar;
