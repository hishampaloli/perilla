import { useRouter } from "next/router";
import React, { useState } from "react";
import style from "../../styles/projectPage.module.scss";
import SearchComp from "../SegemanticComponents/SearchComp";
import CreateProjectComponent from "./CreateProjectComponent";
import ProjectListComponent from "./ProjectListComponent";
import ProjectSearchComponent from "./ProjectSearchComponent";

const ProjectPageComp = () => {
  const router = useRouter();

  
  return (
    <div className={style.projectMain}>
      <CreateProjectComponent />
      <ProjectSearchComponent />
      <ProjectListComponent />
    </div>
  );
};

export default ProjectPageComp;
