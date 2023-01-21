import React from "react";
import style from "../../../../styles/dashboard.module.scss";
import DashBoardCountDiv from "./DashBoardCountDiv";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DiamondIcon from '@mui/icons-material/Diamond';
import Person3Icon from '@mui/icons-material/Person3';

const DashBoardCounts = () => {
  return (
    <div className={style.dashboardcount}>
      <DashBoardCountDiv
        text="Projects"
        count="122"
        icon={<AccountTreeIcon />}
      />

      <DashBoardCountDiv
        text="Clients"
        count="44"
        icon={<AttachMoneyIcon />}
      />

      <DashBoardCountDiv
        text="Tasks"
        count="390"
        icon={<DiamondIcon />}
      />

      <DashBoardCountDiv
        text="Employees"
        count="298"
        icon={<Person3Icon />}
      />
    </div>
  );
};

export default DashBoardCounts;
