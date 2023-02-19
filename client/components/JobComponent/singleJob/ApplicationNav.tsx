import React, { useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ApplicationData, GetSingleJobState } from "../../../models/job";
import style from "../../../styles/task.module.scss";
import CompletedTask from "./CompletedTask";
import PendingTask from "./PendingTask";

const ApplicationNav = () => {
  const [nav, setNav] = useState<boolean>(true);
  const { data }: GetSingleJobState = useTypedSelector(
    (state) => state.singleJob
  );
  console.log(data);

  return (
    <>
      <div className={style.taskNav}>
        <button
          onClick={() => setNav(true)}
          className={nav === true ? style.clBtn : ""}
        >
          Pending
        </button>
        <button
          onClick={() => setNav(false)}
          className={nav === false ? style.clBtn : ""}
        >
          Shortlisted
        </button>
      </div>

      {nav ? (
        <PendingTask
          data={data?.data.applications.filter((el: ApplicationData) => {
            return el.status === "pending";
          })}
        />
      ) : (
        <CompletedTask
          data={data?.data.applications.filter((el: ApplicationData) => {
            return el.status === "shortlisted";
          })}
        />
      )}
    </>
  );
};

export default ApplicationNav;
