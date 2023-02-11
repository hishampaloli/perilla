import Link from "next/link";
import React from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { AuthState } from "../../../../models/tenants";
import style from "../../../../styles/sideBar.module.scss";

import DashboardIcon from "@mui/icons-material/Dashboard";
import LinkDiv from "../LinkDiv";
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
      <LinkDiv
        type="employee"
        text="Dash Board"
        link="dashboard"
        icon={<DashboardIcon />}
      />
      <LinkDiv
        type="employee"
        text="Profile"
        link="profile"
        icon={<AccountCircleIcon />}
      />
      <LinkDiv
        type="employee"
        text="My Tasks"
        link="tasks"
        icon={<SplitscreenIcon />}
      />{" "}
      <LinkDiv
        type="employee"
        text="My Projects"
        link="projects"
        icon={<RocketLaunchIcon />}
      />
      <LinkDiv
        type="employee"
        text="Leaves"
        link="leaves"
        icon={<HouseboatIcon />}
      />
      <LinkDiv
        type=""
        text="My Payouts"
        link="payouts"
        icon={<PaymentIcon />}
      />
      <LinkDiv
        type="employee"
        text="Chats"
        link="payrolls"
        icon={<ChatIcon />}
      />
      <Link href={'/hp/chat'}>sdf</Link>
    </div>
  );
};

export default EmployeeSideBar;
