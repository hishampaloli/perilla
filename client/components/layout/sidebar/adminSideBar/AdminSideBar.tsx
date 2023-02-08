import Link from "next/link";
import React from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { AuthState } from "../../../../models/tenants";
import style from "../../../../styles/sideBar.module.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LinkDiv from "../LinkDiv";
import Groups3Icon from "@mui/icons-material/Groups3";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PaymentIcon from "@mui/icons-material/Payment";
import PaidIcon from "@mui/icons-material/Paid";
import HouseboatIcon from "@mui/icons-material/Houseboat";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
import NearbyErrorIcon from "@mui/icons-material/NearbyError";

const AdminSideBar = () => {
  const { data }: AuthState = useTypedSelector((state) => state.user);
  return (
    <div className={style.adminSideBarMain}>
      <LinkDiv
        type="admin"
        text="Dash Board"
        link="dashboard"
        icon={<DashboardIcon />}
      />
      <LinkDiv
        type="admin"
        text="All Employees"
        link="allEmployees"
        icon={<PersonOutlineIcon />}
      />
      <LinkDiv
        type="admin"
        text="All HRs"
        link="hrs"
        icon={<PeopleOutlineIcon />}
      />{" "}
      <LinkDiv
        type="admin"
        text="Projects"
        link="projects"
        icon={<RocketLaunchIcon />}
      />
      <LinkDiv
        type="admin"
        text="Clients"
        link="clients"
        icon={<Groups3Icon />}
      />
      <LinkDiv
        type="admin"
        text="Tasks"
        link="tasks"
        icon={<SplitscreenIcon />}
      />
      <LinkDiv
        type="admin"
        text="Assets"
        link="assets"
        icon={<LocalMallIcon />}
      />
      <LinkDiv
        type="admin"
        text="Expenses"
        link="expenses"
        icon={<LocalAtmIcon />}
      />
      <LinkDiv
        type="admin"
        text="Payout Request"
        link="payouts"
        icon={<PaidIcon />}
      />

      <LinkDiv
        type="admin"
        text="Leave Request"
        link="leaves"
        icon={<NearbyErrorIcon />}
      />
      
      <LinkDiv
        type="admin"
        text="Holidays"
        link="holidays"
        icon={<HouseboatIcon />}
      />
      <LinkDiv
        type="admin"
        text="Bank Details"
        link="bankDetails"
        icon={<AccountBalanceIcon />}
      />
      <LinkDiv
        type="admin"
        text="Settings"
        link="settings"
        icon={<SettingsIcon />}
      />
      <LinkDiv
        type="admin"
        text="Reset Password"
        link="resetPassword"
        icon={<LockIcon />}
      />
    </div>
  );
};

export default AdminSideBar;
