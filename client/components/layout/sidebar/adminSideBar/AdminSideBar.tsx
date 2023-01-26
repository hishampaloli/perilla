import Link from "next/link";
import React from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { AuthState } from "../../../../models/tenants";
import style from "../../../../styles/sideBar.module.scss";
import { AdminLinks } from "./AdminLinks";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LinkDiv from "./LinkDiv";
import Groups3Icon from "@mui/icons-material/Groups3";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PaymentIcon from "@mui/icons-material/Payment";
import PaidIcon from "@mui/icons-material/Paid";
import HouseboatIcon from "@mui/icons-material/Houseboat";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from '@mui/icons-material/Lock';

const AdminSideBar = () => {
  const { data }: AuthState = useTypedSelector((state) => state.user);
  return (
    <div className={style.adminSideBarMain}>
      <LinkDiv text="Dash Board" link="dashboard" icon={<DashboardIcon />} />
      <LinkDiv
        text="All Employees"
        link="allEmployees"
        icon={<PersonOutlineIcon />}
      />
      <LinkDiv text="All HRs" link="hrs" icon={<PeopleOutlineIcon />} />{" "}
      <LinkDiv text="Projects" link="projects" icon={<RocketLaunchIcon />} />
      <LinkDiv text="Clients" link="clients" icon={<Groups3Icon />} />
      <LinkDiv text="Tasks" link="tasks" icon={<SplitscreenIcon />} />
      <LinkDiv text="Assets" link="assets" icon={<LocalMallIcon />} />
      <LinkDiv text="Payrolls" link="payrolls" icon={<PaymentIcon />} />
      <LinkDiv text="Payout Request" link="payouts" icon={<PaidIcon />} />
      <LinkDiv text="Holidays" link="holidays" icon={<HouseboatIcon />} />
      <LinkDiv
        text="Bank Details"
        link="bankDetails"
        icon={<AccountBalanceIcon />}
      />
      <LinkDiv text="Settings" link="settings" icon={<SettingsIcon />} />
      <LinkDiv text="Reset Password" link="resetPassword" icon={<LockIcon />} />
    </div>
  );
};

export default AdminSideBar;
