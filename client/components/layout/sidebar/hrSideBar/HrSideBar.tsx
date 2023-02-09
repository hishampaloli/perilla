import Link from "next/link";
import React from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { AuthState } from "../../../../models/tenants";
import style from "../../../../styles/sideBar.module.scss";

import DashboardIcon from "@mui/icons-material/Dashboard";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import PaymentIcon from "@mui/icons-material/Payment";
import HouseboatIcon from "@mui/icons-material/Houseboat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Groups3Icon from "@mui/icons-material/Groups3";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ApprovalIcon from "@mui/icons-material/Approval";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LinkDiv from "../LinkDiv";

const HrSideBar = () => {
  return (
    <div className={style.adminSideBarMain}>
      <LinkDiv
        type="hr"
        text="Dash Board"
        link="dashboard"
        icon={<DashboardIcon />}
      />{" "}
      <LinkDiv
        type="hr"
        text="Projects"
        link="projects"
        icon={<RocketLaunchIcon />}
      />
      <LinkDiv
        type="hr"
        text="Profile"
        link="profile"
        icon={<AccountCircleIcon />}
      />
      <LinkDiv
        type="admin"
        text="All Employees"
        link="allEmployees"
        icon={<PersonOutlineIcon />}
      />
      <LinkDiv type="hr" text="Clients" link="clients" icon={<Groups3Icon />} />
      <LinkDiv
        type="hr"
        text="My Tasks"
        link="tasks"
        icon={<SplitscreenIcon />}
      />{" "}
      <LinkDiv
        type="hr"
        text="Task Approval"
        link="taskApproval"
        icon={<ApprovalIcon />}
      />{" "}
      <LinkDiv type="hr" text="Leaves" link="leaves" icon={<HouseboatIcon />} />
      <LinkDiv
        type="/"
        text="My Payouts"
        link="payouts"
        icon={<PaymentIcon />}
      />
      <LinkDiv type="hr" text="Assets" link="assets" icon={<LocalMallIcon />} />
      <LinkDiv
        type="hr"
        text="My Expense"
        link="expenses"
        icon={<LocalAtmIcon />}
      />
      <LinkDiv type="hr" text="Chats" link="payrolls" icon={<ChatIcon />} />
    </div>
  );
};

export default HrSideBar;
