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
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

const UserSideBar = () => {
  const { data }: AuthState = useTypedSelector((state) => state.user);
  return (
    <div className={style.adminSideBarMain}>
      <LinkDiv type="" text="All Jobs" link="jobs" icon={<DashboardIcon />} />
      <LinkDiv
        type=""
        text="Applications"
        link="applications"
        icon={<ReceiptLongIcon />}
      />
    </div>
  );
};

export default UserSideBar;
