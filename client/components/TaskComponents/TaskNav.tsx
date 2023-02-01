import React, { useState } from "react";
import style from "../../styles/task.module.scss";
import CompletedTask from "./CompletedTask";
import PendingTask from "./PendingTask";

const TaskNav = () => {
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
      {nav ? <PendingTask /> : <CompletedTask />}
    </>
  );
};

export default TaskNav;
