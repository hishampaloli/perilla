import React, { useState } from "react";
import style from "../../styles/profile.module.scss";
import ProjectBox from "../ProfileComponent/ProjectBox";


const ClientNav = () => {
  const [nav, setNav] = useState<string>("project");

  return (
    <>
      <div className={style.profileNav}>
        <h2
          className={nav === "project" ? style.isActive : ""}
          onClick={() => setNav("project")}
        >
          Projects
        </h2>
        <h2
          className={nav === "task" ? style.isActive : ""}
          onClick={() => setNav("task")}
        >
          Tasks
        </h2>
      </div>

      <div>{nav === "project" && <ProjectBox type="client" />}</div>
    </>
  );
};

export default ClientNav;
