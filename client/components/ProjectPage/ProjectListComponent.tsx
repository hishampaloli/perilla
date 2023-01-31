import React from "react";
import style from "../../styles/projectPage.module.scss";
import ProjectBox from "./ProjectBox";

const ProjectListComponent = () => {
  return (
    <div className={style.projectList}>
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
    </div>
  );
};  

export default ProjectListComponent;
