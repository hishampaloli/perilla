import React from "react";
import style from "../../../../styles/jobViewComponent.module.scss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Person2Icon from "@mui/icons-material/Person2";
import { JobData } from "../../../../models/job";

const LeftTopComponent = ({ data }: { data: JobData }) => {
  const Sdate = new Date(data?.startDate);
  const Ldate = new Date(data?.lastDate);
  return (
    <div className={style.top}>
      <div>
        <h2>{data?.jobTitle}</h2>
        <p>{data?.jobDesignation}</p>
      </div>

      <div className={style.topContentsList}>
        <div>
          <span>
            <CalendarMonthIcon />
          </span>{" "}
          <p>Post Date</p> <p>{Sdate.toDateString()}</p>{" "}
        </div>

        <div>
          <span>
            <CalendarMonthIcon />
          </span>{" "}
          <p>Last Date</p> <p>{Ldate.toDateString()}</p>{" "}
        </div>

        <div>
          <span>
            <Person2Icon />
          </span>{" "}
          <p>Applications</p> <p>{data?.applications.length}</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default LeftTopComponent;
