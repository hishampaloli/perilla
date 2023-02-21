import React from "react";
import style from "../../../styles/dashboard.module.scss";
import DashBoardChartMain from "./DashBoardChartComponent/DashBoardChartMain";
import DashBoardCounts from "./DashboardCount/DashBoardCounts";

const MainDashboardComponent = () => {
  return (
    <div className={style.dashboardmain}>
      <DashBoardCounts />
      <DashBoardChartMain />
    </div>
  );
};

export default MainDashboardComponent;
