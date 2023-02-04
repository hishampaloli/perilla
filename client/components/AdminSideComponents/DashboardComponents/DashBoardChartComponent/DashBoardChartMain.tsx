import React from "react";
import DashBoardChartOne from "./DashBoardChartOne";
import style from "../../../../styles/dashboard.module.scss";

const DashBoardChartMain = () => {
  return (
    <div className={style.dashboardChartMain}>
      <DashBoardChartOne />
    </div>
  );
};

export default DashBoardChartMain;
