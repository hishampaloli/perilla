import React, { useState } from "react";
import style from "../../styles/task.module.scss";
import CompletedTask from "./CompletedTask";
import MyPendingTask from "./MyPendingTask";
import PendingTask from "./PendingTask";

const TaskNav = ({ type }: { type: string }) => {
  const [nav, setNav] = useState<boolean>(true);
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
          Completed
        </button>
      </div>

      {type === "my" && <> {nav ? <MyPendingTask /> : <CompletedTask />}</>}
      {type === "project" && <>{nav ? <PendingTask /> : <CompletedTask />}</>}
    </>
  );
};

export default TaskNav;
