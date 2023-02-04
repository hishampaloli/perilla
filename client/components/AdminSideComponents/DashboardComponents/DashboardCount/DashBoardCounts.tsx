import React, { useEffect } from "react";
import style from "../../../../styles/dashboard.module.scss";
import DashBoardCountDiv from "./DashBoardCountDiv";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DiamondIcon from "@mui/icons-material/Diamond";
import Person3Icon from "@mui/icons-material/Person3";
import { GetDashBoardState } from "../../../../models/tenants";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useAction";

const DashBoardCounts = () => {
  const { data, loading }: GetDashBoardState = useTypedSelector(
    (state) => state.getDashBoard
  );
  const { getDashboard } = useActions();

  useEffect(() => {
    getDashboard("");
  }, []);
  console.log(data);
  return (
    <div className={style.dashboardcount}>
      <DashBoardCountDiv
        text="Projects"
        count={data?.data.totalProject!}
        icon={<AccountTreeIcon />}
      />

      <DashBoardCountDiv
        text="Clients"
        count={data?.data?.clientCount!}
        icon={<AttachMoneyIcon />}
      />

      <DashBoardCountDiv
        text="Tasks"
        count={data?.data?.totalTask!}
        icon={<DiamondIcon />}
      />

      <DashBoardCountDiv
        text="Employees"
        count={data?.data.employeeCount!}
        icon={<Person3Icon />}
      />
    </div>
  );
};

export default DashBoardCounts;
